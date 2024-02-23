<script lang="ts">
import { onMount } from 'svelte';
import { map, tileLayer, type LatLngTuple } from 'leaflet'

const mapUrl: string = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
const initialView: LatLngTuple = [52, 19]

const createMap = (container: HTMLElement) => {
  let m = map(container, {preferCanvas: true }).setView(initialView, 5.22);
  tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    {
      maxZoom: 10,
    }
  ).addTo(m)

  return m
}

onMount(() => {
  const mapElement: HTMLElement | null = document.getElementById('map-container')
  if (mapElement) createMap(mapElement)
})
</script>

<div id="map-container" />