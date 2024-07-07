<script lang="ts">
import { selectedLocationStore } from "../../../stores/mapStores";
import { deleteLocation, editLocation } from "../../location/fn";
import MarkerModal from "./MarkerModal.svelte";

$: ({ latlng, name, _id } = $selectedLocationStore!)
$: ({ lat, lng } = latlng)

function onEditLocation(e: CustomEvent<{ name: string, lat: number, lng: number }>): void {
  const { name, lat, lng } = e.detail
  const updateData = {
    name,
    lat: Number(lat),
    lng: Number(lng),
  }
  editLocation(_id.$oid, updateData)
}
</script>

<!-- TODO: remove one layer -->
<MarkerModal
  canEdit
  canDelete
  {lat}
  {lng}
  {name}
  on:delete={() => deleteLocation($selectedLocationStore)}
  on:edit={e => onEditLocation(e)}
/>