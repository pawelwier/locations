<script lang="ts">
import { createLocationStore, selectedLocationStore } from "../../stores/mapStores";

export let open: Boolean = false

function onBgClick(): void {
  selectedLocationStore.set(null)
  createLocationStore.set(null)
}
</script>

{#if open}
  <button class="modal-bg size-full" 
    on:click={onBgClick}
  />

  <div class="modal-container">
    <slot />
  </div>
{/if}