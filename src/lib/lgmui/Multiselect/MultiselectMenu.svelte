<script>
import { getContext } from "svelte";
import { key } from "./Multiselect.svelte";
import { MultiselectMenuItem, MultiselectAdd } from "./multiselect.js";

const { menuItemsFiltered: items, currInput, menuItems } = getContext(key);
</script>

<!--------markup-------->

<nav hidden={!$menuItems.length && !$currInput.length}>
	<ul>
		{#if $items.length}
			{#each $items as item}
				<MultiselectMenuItem content={item}>
					{item}
				</MultiselectMenuItem>
			{/each}
		{:else}
			<MultiselectMenuItem overrideDefaultAction={true}>
				<MultiselectAdd content={$currInput} />
			</MultiselectMenuItem>
		{/if}
	</ul>
</nav>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  nav
    background: oc.$dark-6
    border: vars.$border-light
    width: 100%
    min-height: vars.$size-2
    padding: vars.$space-xxs
</style>
