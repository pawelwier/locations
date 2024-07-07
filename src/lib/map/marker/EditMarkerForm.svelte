<script lang="ts">
import { createEventDispatcher, type EventDispatcher } from 'svelte'
import { resetPendingActionStore } from '../../../stores/utilStores'
import Button from '../../common/Button.svelte'

export let lat
export let lng
export let name

// TODO: make util fn with generics
const dispatch: EventDispatcher<any> = createEventDispatcher()

function handleEdit(e: SubmitEvent): void {
  const formData: FormData = new FormData(e.target as HTMLFormElement)
  const formDataEntries = formData.entries();
  const myData = Object.fromEntries(formDataEntries);

  resetPendingActionStore()
  dispatch('edit', myData)
}

function handleCancel(): void {
  resetPendingActionStore()
  dispatch('close')
}
</script>

<!-- TODO -->
<form
  on:submit|preventDefault={handleEdit}
>
  <input
    type="text"
    name="name"
    value={name}
  />

  <input
    type="text"
    name="lat"
    value={lat}
  />

  <input
    type="text"
    name="lng"
    value={lng}
  />

  <Button
    type="submit"
    text="Submit"
  />

  <Button
    text="Cancel"
    isPrimary={false}
    on:click={handleCancel}
  />
</form>