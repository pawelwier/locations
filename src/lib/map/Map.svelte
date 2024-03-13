<script lang="ts">
import { onMount } from 'svelte'
import { map as drawMap, marker, tileLayer, type LatLngTuple, Map, Marker } from 'leaflet'
import { addMapEventListeners } from './utils'
import { type Location } from '../../types'
import { selectedLocationStore } from '../../stores/mapStores'
import { getLocations } from '../../controllers/locationController'

const mapUrl: string = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
const initialView: LatLngTuple = [52, 19]
let mapElement: HTMLElement | null

let map: Map
let locations: Location[] = []

function createMap(container: HTMLElement): Map {
  map = drawMap(container, { preferCanvas: true })
    .setView(initialView, 6.22)
  
  tileLayer(
    mapUrl,
    { maxZoom: 10 }
  ).addTo(map)

  addMapEventListeners(map)

  return map
}

function displayLocationMarkers(m: Map, locationList: Location[]): void {
  locationList.forEach(location => {
    const { latlng } = location
    const locationMarker: Marker = marker(latlng).addTo(m)
    locationMarker.on('click', e => {
      selectedLocationStore.set(location)
    })
  })
}

async function loadLocations(): Promise<void> {
  locations = await getLocations()
  displayLocationMarkers(map, locations)
}

onMount(async () => {
  mapElement = document.getElementById('map-container')
  if (mapElement) {    
    const map = createMap(mapElement)
    await loadLocations()

    map.on('marker-added', async (e) => {
      await loadLocations()
      const x = e as unknown as { locations: Location[] }
      // TODO: add alert modal
    })
  }
})
</script>

<div id="map-container" />