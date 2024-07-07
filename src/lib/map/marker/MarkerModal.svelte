<script lang="ts">
import { createEventDispatcher, type EventDispatcher } from 'svelte'
import Modal from "../../common/Modal.svelte"
import { getLatText, getLngText } from "../../location/utils"
import EditMarkerForm from "./EditMarkerForm.svelte";
import MarkerModalBtns from "./MarkerModalBtns.svelte"

export let lat: number
export let lng: number
export let name: string = ''
export let canCancel: boolean = true
export let canEdit: boolean = false
export let canCreate: boolean = false
export let canDelete: boolean = false

let displayEdit: boolean = false

const dispatch: EventDispatcher<any> = createEventDispatcher<{ name: string }>()

function toggleDisplayEdit(): void {
  displayEdit = !displayEdit
}

function handleEdit(e: CustomEvent<{ name: string }>): void {
  dispatch('edit', e.detail)
  toggleDisplayEdit()
}
</script>

<Modal open>
  <div>
    {getLatText(lat, 6)}
  </div>
  
  <div>
    {getLngText(lng, 6)}
  </div>

  <slot />

  {#if displayEdit}
    <EditMarkerForm
      {lat}
      {lng}
      {name}
      on:close={toggleDisplayEdit}
      on:edit={handleEdit}
    />
  {:else}
    {name}

    <MarkerModalBtns
      {canCancel}
      {canEdit}
      {canCreate}
      {canDelete}
      {name}
      on:create
      on:edit={toggleDisplayEdit}
      on:delete
    />
  {/if}
</Modal>