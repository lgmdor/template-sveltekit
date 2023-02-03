<script>
// @ts-nocheck

import { key } from "./Multiselect.svelte";
import { getContext } from "svelte";

export let content;

const { addItem } = getContext(key);

const add = () => addItem(content);
</script>

<!--------markup-------->

<button class="add" on:click={add} on:keydown={add}>
	<span>+ Add {content}</span>
</button>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .add
    appearance: none
    border: none
    outline: none
    background: transparent
    display: flex
    align-items: center
    justify-content: flex-start
    height: 100%
    width: 100%
    cursor: pointer
    color: vars.$c-text-1
    @include vars.font-m
</style>
