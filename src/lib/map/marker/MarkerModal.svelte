<script lang="ts">
import Modal from "../../common/Modal.svelte"
import { getLatText, getLngText } from "../utils"
import MarkerModalBtns from "./MarkerModalBtns.svelte"

export let lat: number
export let lng: number
</script>

<Modal open>
  <div>
    {getLatText(lat, 6)}
  </div>
  
  <div>
    {getLngText(lng, 6)}
  </div>

  <slot />

  <MarkerModalBtns />
</Modal>