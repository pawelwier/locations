<script lang="ts">
import { selectedLocationStore } from "../../../stores/mapStores";
import { deleteLocation } from "../../location/fn";
import MarkerModal from "./MarkerModal.svelte";

$: ({ latlng, name } = $selectedLocationStore!)
$: ({ lat, lng } = latlng)
</script>

<MarkerModal
  canEdit
  canDelete
  {lat}
  {lng}
  on:delete={() => deleteLocation($selectedLocationStore)}
>
  <!-- TODO: finish, add edit -->
  {name}
</MarkerModal>