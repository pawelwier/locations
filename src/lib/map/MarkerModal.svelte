<script lang="ts">
import Modal from "../common/Modal.svelte"
import { selectedLocationStore } from "../../stores/mapStores";

$: ({ latlng } = $selectedLocationStore!)

$: ({ lat, lng } = latlng)
</script>

<Modal open>
  <!-- TODO: add data, form -->
  <div>
    {lat}
  </div>
  <div>
    {lng}
  </div>
</Modal>