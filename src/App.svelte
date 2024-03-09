<script lang="ts">
import Modal from "./lib/common/Modal.svelte"
import Map from "./lib/map/Map.svelte"
  import MarkerModal from "./lib/map/MarkerModal.svelte";
  import { selectedLocationStore } from "./stores/mapStores";

</script>

<main>
  <Map />

  {#if $selectedLocationStore}
    <MarkerModal />
  {/if}
</main>
