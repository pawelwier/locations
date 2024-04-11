<script lang="ts">
import { selectedLocationStore } from "../../../stores/mapStores";
import MarkerModal from "./MarkerModal.svelte";

$: ({ latlng, name } = $selectedLocationStore!)
$: ({ lat, lng } = latlng)
</script>

<MarkerModal
  canEdit
  {lat}
  {lng}
>
  <!-- TODO: finish, add edit -->
  {name}
</MarkerModal>