<script>
import { key } from "./Multiselect.svelte";
import { getContext } from "svelte";

export let content = "";
export let overrideDefaultAction = false;

const { selectItem } = getContext(key);

const select = (node) => {
	if (!overrideDefaultAction) {
		selectItem(content);
	}
};
</script>

<!--------markup-------->

<li on:click={select} on:keydown={select}>
	<slot />
</li>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'
  
  li
    background: transparent
    padding: 0 vars.$space-s
    height: vars.$size-2
    display: flex
    align-items: center
    @include vars.font-m
    border-radius: vars.$border-radius
    cursor: pointer
    user-select: none
    &:hover
      background: oc.$dark-4

</style>
