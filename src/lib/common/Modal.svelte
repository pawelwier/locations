<script lang="ts">
import { selectedLocationStore } from "../../stores/mapStores";

export let open: Boolean = false
</script>

{#if open}
  <button class="modal-bg size-full" 
    on:click={() => selectedLocationStore.set(null)}
  />

  <div class="modal-container">
    <slot />
  </div>
{/if}