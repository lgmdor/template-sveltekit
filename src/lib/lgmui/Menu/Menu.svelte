<script context="module">
export const key = Symbol();
</script>

<script>
import { outsideClick } from "./../utils.js";
import { setContext } from "svelte";
import { writable } from "svelte/store";

let nodeMenu;

let show = writable(false);

setContext(key, {
	show
});

const toggle = () => {
	show.update(($show) => !$show);
};

const hide = () => {
	show.set(false);
};
</script>

<!--------markup-------->

<div class="wrap lgmui menu" bind:this={nodeMenu}>
	<div class="wrap-top">
		<div class="wrap-button" on:click|stopPropagation={toggle} on:keydown|stopPropagation={toggle}>
			<slot name="button" />
		</div>
	</div>
	{#if $show}
		<nav
			class="menu"
			use:outsideClick={{ excludeNode: nodeMenu, settings: { stopPropagation: false } }}
			on:outsideclick={hide}
		>
			<ul>
				<slot name="items" />
			</ul>
		</nav>
	{/if}
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .wrap
    display: flex
    flex-direction: column
    justify-content: center
    position: relative
    .wrap-top
      @include vars.center
      .wrap-button
        display: inline-block
    nav
      transform: translateX(-50%)
      left: 50%
      top: calc(100% + vars.$space-xs)
      position: absolute
      background: oc.$dark-6
      border: vars.$border-light
      width: 100%
      min-width: vars.$size-8
      min-height: vars.$size-2
      padding: vars.$space-xxs
      border-radius: vars.$br-m
      z-index: 9
      ul
        list-style: none
</style>
