<script lang="ts">
import { createEventDispatcher, type EventDispatcher } from 'svelte'
import { resetLocationStores } from '../../../stores/mapStores'
import Button from '../../common/Button.svelte'
import { LocationActionEnum } from '../../../types'
import { pendingActionStore } from '../../../stores/utilStores'

export let canCancel: boolean
export let canEdit: boolean
export let canCreate: boolean
export let canDelete: boolean
export let name: string

const dispatch: EventDispatcher<any> = createEventDispatcher()

function dispatchAction(action: LocationActionEnum): void {
  dispatch(action)
  pendingActionStore.set(action)
}

$: isActionPending = (action: LocationActionEnum) => {
  return $pendingActionStore === action
}
</script>

<div class="flex-center marker-btn-container">
  {#if canCancel}
    <Button
      text='Cancel'
      isPrimary={false}
      on:click={resetLocationStores}
    />
  {/if}

  {#if canEdit}
    <Button
      disabled={isActionPending(LocationActionEnum.EDIT)}
      text='Edit'
      on:click={() => dispatchAction(LocationActionEnum.EDIT)}
    />
  {/if}

  {#if canCreate}
    <Button
      disabled={isActionPending(LocationActionEnum.CREATE) || !name}
      text='Create'
      on:click={() => dispatchAction(LocationActionEnum.CREATE)}
    />
  {/if}

  {#if canDelete}
    <Button
      disabled={isActionPending(LocationActionEnum.DELETE)}
      text='Delete'
      on:click={() => dispatchAction(LocationActionEnum.DELETE)}
    />
  {/if}
</div>