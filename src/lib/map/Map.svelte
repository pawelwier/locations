<script lang="ts">
import { onMount } from 'svelte'
import { map as drawMap, marker, tileLayer, type LatLngTuple, Map, LeafletEvent } from 'leaflet'
import { addMapEventListeners } from './utils'
import { type Location } from '../../types'

const mapUrl: string = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
const initialView: LatLngTuple = [52, 19]
let mapElement: HTMLElement | null

let map: Map
let locs: Location[] = []

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

function displayLocationMarkers(m: Map, locations: Location[]): void {
  locations.forEach(({ latlng }) => {
    marker(latlng).addTo(m)
  })
}

$: displayLocationMarkers(map, locs)


onMount(() => {
  mapElement = document.getElementById('map-container')
  if (mapElement) {
    /* TODO: get locations from db */
    createMap(mapElement)

    /* TODO: remove 'locs', reactivity on db results */
    map.on('marker-added', (e) => {
      const x = e as unknown as { locations: Location[] }
      locs = x.locations
    })
  }
})
</script>
<div id="map-container" />