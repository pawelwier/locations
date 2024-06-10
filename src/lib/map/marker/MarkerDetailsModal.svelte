<script lang="ts">
import { selectedLocationStore } from "../../../stores/mapStores";
import { deleteLocation } from "../../location/fn";
import MarkerModal from "./MarkerModal.svelte";

$: ({ latlng, name, _id } = $selectedLocationStore!)
$: ({ lat, lng } = latlng)
</script>

<MarkerModal
  canEdit
  canDelete
  {lat}
  {lng}
  on:delete={() => deleteLocation(_id.$oid)}
>
  <!-- TODO: finish, add edit -->
  {name}
</MarkerModal>