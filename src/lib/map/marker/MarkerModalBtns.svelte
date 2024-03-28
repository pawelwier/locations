<script lang="ts">
import { resetLocationStores } from "../../../stores/mapStores"
import Button from "../../common/Button.svelte";

</script>

<div class="flex-center marker-btn-container">
  <Button
    text='Cancel'
    isPrimary={false}
    on:click={resetLocationStores}
  />

  <Button
    text='Edit'
  />

  <Button
    text='Create'
  />
</div>