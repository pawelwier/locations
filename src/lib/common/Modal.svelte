<script lang="ts">
import { resetLocationStores } from "../../stores/mapStores"

export let open: Boolean = false

</script>

{#if open}
  <button class="modal-bg size-full" 
    on:click={resetLocationStores}
  />

  <div class="modal-container">
    <slot />
  </div>
{/if}