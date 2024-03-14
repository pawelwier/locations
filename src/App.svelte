<script lang="ts">
import CreateMarkerModal from "./lib/map/CreateMarkerModal.svelte";
import Map from "./lib/map/Map.svelte"
import MarkerDetailsModal from "./lib/map/MarkerDetailsModal.svelte";
import { createLocationStore, selectedLocationStore } from "./stores/mapStores"

</script>

<main>
  <Map />

  {#if $selectedLocationStore}
    <MarkerDetailsModal />
  {/if}
  {#if $createLocationStore}
    <CreateMarkerModal />
  {/if}
</main>
