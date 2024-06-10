<script lang="ts">
import Modal from "../../common/Modal.svelte"
import { getLatText, getLngText } from "../../location/utils"
import MarkerModalBtns from "./MarkerModalBtns.svelte"

export let lat: number
export let lng: number
export let name: string = ''
export let canCancel: boolean = true
export let canEdit: boolean = false
export let canCreate: boolean = false
export let canDelete: boolean = false
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
    {canDelete}
    {name}
    on:create
    on:edit
    on:delete
  />
</Modal>