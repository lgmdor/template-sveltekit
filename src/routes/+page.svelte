<script>
import { Menu, MenuItem } from "$lib/lgmui/Menu/menu.js";
import { Button } from "$lib/lgmui/Misc/misc.js";

const lol = (e) => {
	console.log(e.target);
};
</script>

<!--------markup-------->

<div class="center">
	<div class="wrap">
		<Menu>
			<Button slot="button" />
			<svelte:fragment slot="items">
				<MenuItem on:click={lol}>hii</MenuItem>
				<MenuItem>oki</MenuItem>
				<MenuItem>aso</MenuItem>
			</svelte:fragment>
		</Menu>
	</div>
</div>

<!--------style-------->
<style lang="sass">
	@use "$src/vars"
	@use "$src/oc"

	.center
		height: 100vh
		display: grid
		place-items: center
		.wrap
			width: vars.$size-12

</style>
