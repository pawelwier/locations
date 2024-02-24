<script lang="ts">
import { onMount } from 'svelte';
import { map, tileLayer, type LatLngTuple, Map } from 'leaflet'
import { addMapEventListeners } from './utils';
import ContextMenu from './ContextMenu.svelte';

const mapUrl: string = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
const initialView: LatLngTuple = [52, 19]
let mapElement: HTMLElement | null

function createMap(container: HTMLElement): Map {
  let m = map(container, {preferCanvas: true }).setView(initialView, 6.22);
  tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    {
      maxZoom: 10,
    }
  ).addTo(m)

  addMapEventListeners(m)

  return m
}

onMount(() => {
  mapElement = document.getElementById('map-container')
  if (mapElement) createMap(mapElement)
})
</script>

<div id="map-container" />

<ContextMenu />