<script lang="ts">
import { onMount } from 'svelte'
import { map as drawMap, marker, tileLayer, type LatLngTuple, Map, Marker } from 'leaflet'
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
    locationMarker.on('click', () => {
      selectedLocationStore.set(location)
    })
  })
}

onMount(async () => {
  mapElement = document.getElementById('map-container')
  if (mapElement) {
    const map = createMap(mapElement)
    
    locations = await getLocations()
    mapStore.set(map)

    $mapStore && displayLocationMarkers($mapStore, locations)
  }
})
</script>

<div id="map-container" />