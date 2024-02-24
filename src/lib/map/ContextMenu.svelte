<script lang="ts">
import { contextMenuStore } from "../../stores/mapStores";

$: ({ latlng: {lat, lng}, position: { x, y } } = $contextMenuStore)

// TODO: move out to utils
function roundLatLng(value: number, precision: number = 2): number {
  return Number(value.toFixed(precision))
}
</script>

{#if x && y}
  <div 
    class="context-menu-container"
    style="left: {x}px; top: {y}px"

  >
    {roundLatLng(lng)}, {roundLatLng(lat)}
    <!-- TODO: if < 0 display E / S; finish impl; -->
  </div>
{/if}