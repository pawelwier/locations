<script lang="ts">
import Modal from "../../common/Modal.svelte"
import { getLatText, getLngText } from "../utils"
import MarkerModalBtns from "./MarkerModalBtns.svelte"

export let lat: number
export let lng: number
export let canCancel: boolean = true
export let canEdit: boolean = false
export let canCreate: boolean = false
</script>

<Modal open>
  <div>
    {getLatText(lat, 6)}
  </div>
  
  <div>
    {getLngText(lng, 6)}
  </div>

  <slot />

  <MarkerModalBtns
    {canCancel}
    {canEdit}
    {canCreate}
    on:create
    on:edit
  />
</Modal>