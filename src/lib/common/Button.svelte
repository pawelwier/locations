<script lang="ts">
import { type EventDispatcher, createEventDispatcher } from "svelte"

export let type: 'button' | 'submit' = 'button'
export let disabled: boolean = false
export let text: string = ''
export let isPrimary: boolean = true

const dispatch: EventDispatcher<{ click: void }> = createEventDispatcher()

function onClick(): void { dispatch('click') }
</script>

<button
  {type}
  {disabled}
  class="
    btn
    {isPrimary ? 'btn-primary' : 'btn-secondary'}
  "
  on:click={onClick}  
>
  <slot>
    {text}
  </slot>
</button>