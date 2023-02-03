<script>
import { key } from "./Tabs.svelte";
import { getContext } from "svelte";

export let tooltip = "";

export let tippySettings = {
	content: tooltip,
	duration: 0,
	placement: "top",
	arrow: false
};

let ref = Symbol();
let tip;

const { registerMenuItem, selectMenuItem, currMenuItem, addTippy } = getContext(key);

const select = () => selectMenuItem(ref);

registerMenuItem(ref);

const useTooltip = async (node, settings) => {
	if (settings.content.length > 0) {
		const tippy = await import("tippy.js");

		tip = tippy.default(node, settings);

		addTippy(tip);

		return {
			update: (settingsNew) => {
				tip.setProps(settingsNew);
			},
			destroy: () => {
				tip.destroy();
			}
		};
	}
};
</script>

<!--------markup-------->

<li
	class="lgmui tabs-menu-item"
	on:click={select}
	on:keydown={select}
	class:selected={ref == $currMenuItem}
	use:useTooltip={tippySettings}
>
	<slot />
</li>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  li
    height: 100%
    cursor: pointer
    font-size: 12px
    @include vars.center
    @include vars.bgHover(oc.$dark-8, 2%)
    @include vars.transition(all)
    &.selected
      color: vars.$c-white
    :global(svg)
      color: currentColor
      aspect-ratio: 1
      transform: scale(0.75)
</style>
