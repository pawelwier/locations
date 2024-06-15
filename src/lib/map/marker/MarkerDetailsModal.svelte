<script lang="ts">
import { selectedLocationStore } from "../../../stores/mapStores";
import { deleteLocation, editLocation } from "../../location/fn";
import MarkerModal from "./MarkerModal.svelte";

$: ({ latlng, name, _id } = $selectedLocationStore!)
$: ({ lat, lng } = latlng)
</script>

<MarkerModal
  canEdit
  canDelete
  {lat}
  {lng}
  on:delete={() => deleteLocation($selectedLocationStore)}
  on:edit={() => editLocation(_id.$oid, { name: 'i\'m not a real name' })}
>
  <!-- TODO: add edit form -->
  {name}
</MarkerModal>