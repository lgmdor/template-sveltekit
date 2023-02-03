<script>
import { getContext } from "svelte";
import { key } from "./Multiselect.svelte";

const { currInput, setInput } = getContext(key);

let node;

$: setInput(value);
$: value = $currInput;
$: {
	$currInput;

	if (node && $currInput === "") {
		node.focus();
	}
}
</script>

<!--------markup-------->

<input type="text" bind:value bind:this={node} spellcheck="false" />

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  input
    appearance: none
    border: none
    outline: none
    background: transparent
    height: vars.$size-2
    min-width: vars.$size-4
    color: vars.$c-text-1
    outline: none
    @include vars.transition(all)
    flex: 1
    @include vars.font-m
</style>
