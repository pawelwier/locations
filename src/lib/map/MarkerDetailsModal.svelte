<script lang="ts">
import MarkerModal from "./MarkerModal.svelte";
import { selectedLocationStore } from "../../stores/mapStores"

$: ({ latlng, name } = $selectedLocationStore!)
$: ({ lat, lng } = latlng)
</script>

<MarkerModal
  {lat}
  {lng}
>
  <!-- TODO: finish, add edit -->
  {name}
</MarkerModal>