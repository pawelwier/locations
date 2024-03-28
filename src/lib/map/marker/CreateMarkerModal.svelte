<script lang="ts">
import MarkerModal from "./MarkerModal.svelte"
import { createLocationStore } from "../../../stores/mapStores"
import { createLocation } from '../utils';

let name: string = ''

$: ({ lat, lng } = $createLocationStore!)
</script>

<MarkerModal
  {lat}
  {lng}
>
  <form on:submit|preventDefault={() => createLocation(name, lat, lng)}>
    <input 
      type="text" 
      bind:value={name}
    />
    <!-- TODO: move btn to bottom modal btn component -->
    <button>
      Add
    </button>
  </form>
</MarkerModal>