<script lang="ts">
import MarkerModal from "./MarkerModal.svelte"
import { createLocationStore } from "../../../stores/mapStores"
import { createLocation } from '../utils';

let name: string = ''

$: ({ lat, lng } = $createLocationStore!)
</script>

<MarkerModal
  canCreate
  {lat}
  {lng}
  on:create={() => createLocation(name, lat, lng)}
>
  <input 
    type="text" 
    bind:value={name}
  />
</MarkerModal>