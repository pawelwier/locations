<script lang="ts">
import { onMount } from 'svelte'
import { map as drawMap, marker, tileLayer, type LatLngTuple, Map, Marker, LeafletEvent } from 'leaflet'
import { addMapEventListeners } from './utils'
import { type Location } from '../../types'
import { mapStore, selectedLocationStore } from '../../stores/mapStores'
import { getLocations } from '../../controllers/locationController'

const mapUrl: string = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
const initialView: LatLngTuple = [45, 19]

let mapElement: HTMLElement | null
let map: Map
let locations: Location[] = []

function createMap(container: HTMLElement): Map {
  map = drawMap(container, { preferCanvas: true })
    .setView(initialView, 7)
  
  tileLayer(
    mapUrl,
    { maxZoom: 20 }
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
    mapStore.set(map)
    map.on('marker-added', async (e: LeafletEvent) => {
      await loadLocations()
      const event = e as unknown as { location: Location }

      // TODO: add alert modal
      console.log('new location:', event.location.name, 'created')
    })
  }
})
</script>

<div id="map-container" />