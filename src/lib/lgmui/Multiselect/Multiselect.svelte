<script context="module">
export const key = Symbol();
</script>

<script>
// @ts-nocheck
import { setContext, createEventDispatcher } from "svelte";
import { writable, derived } from "svelte/store";
import { MultiselectItem, MultiselectMenu, MultiselectInput } from "./multiselect.js";
import { outsideClick, storeAdd, storeRemove } from "./../utils.js";
import IconDelete from "$icons/cancel.svg?component";
import IconExpand from "$icons/select.svg?component";

export let placeholder = "Select items";
export let optionsUnselected = [];
export let optionsSelected = [];

$: {
	optionsUnselected;

	menuItems.set(optionsUnselected);
}

$: {
	optionsSelected;

	selectedItems.set(optionsSelected);
}

const dispatch = createEventDispatcher();

const isFocused = writable(false);
const currInput = writable("");
const menuItems = writable(optionsUnselected);
const menuItemsFiltered = derived([menuItems, currInput], ([$menuItems, $currInput]) =>
	$menuItems.filter((item) => item.includes($currInput))
);
const selectedItems = writable(optionsSelected);
const allItems = derived([menuItems, selectedItems], ([$menuItems, $selectedItems]) => [
	...$selectedItems,
	...$menuItems
]);

const selectItem = (item) => {
	storeAdd(selectedItems, item);
	storeRemove(menuItems, item);

	dispatch("updateselected", { items: $selectedItems });

	setInput(" "); //hack to toggle input focus
	setInput("");
};

const deselectItem = (item) => {
	storeRemove(selectedItems, item);
	storeAdd(menuItems, item);

	dispatch("updateselected", { items: $selectedItems });
};

const deselectAll = () => {
	menuItems.set($allItems);
	selectedItems.set([]);

	dispatch("updateselected", { items: $selectedItems });

	setInput("");
};

const setInput = (input) => currInput.set(input);

const addItem = (item) => {
	storeAdd(selectedItems, item);

	dispatch("updateall", { items: $allItems });
	dispatch("updateselected", { items: $selectedItems });

	setInput("");
};

setContext(key, {
	isFocused,
	currInput,
	setInput,
	menuItems,
	menuItemsFiltered,
	selectedItems,
	selectItem,
	deselectItem,
	deselectAll,
	addItem
});

const focus = () => isFocused.set(true);

const unfocus = () => isFocused.set(false);
</script>

<!--------markup-------->

<div class="wrap lgmui multiselect">
	<div
		class="wrap-content"
		on:click={focus}
		on:keydown={focus}
		use:outsideClick
		on:outsideclick={unfocus}
		class:focused={$isFocused}
	>
		{#if $selectedItems.length == 0 && !$isFocused}
			<span class="placeholder">{placeholder}</span>
		{/if}

		{#each $selectedItems as item}
			<MultiselectItem content={item} />
		{/each}

		{#if $isFocused}
			<MultiselectInput />
		{/if}

		{#if $selectedItems.length}
			<button class="btn-deselect" on:click|stopPropagation={deselectAll}>
				<IconDelete />
			</button>
		{:else}
			<button class="btn-expand">
				<IconExpand />
			</button>
		{/if}

		{#if $isFocused}
			<div class="wrap-menu">
				<MultiselectMenu />
			</div>
		{/if}
	</div>
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .wrap
    min-width: vars.$size-8
    position: relative
    .wrap-content
      position: absolute
      border: vars.$border-light
      min-height: vars.$size-2
      width: 100%
      border-radius: vars.$border-radius
      background: oc.$dark-6
      display: flex
      flex-wrap: wrap
      align-items: center
      padding-left: vars.$space-s
      padding-right: vars.$space-l
      &.focused
        border: 1px solid vars.$c-main
      .wrap-menu
        margin-top: vars.$space-s
        position: absolute
        left: 0
        right: 0
        background: red
        top: 100%
        border-radius: vars.$border-radius
        overflow: hidden
      .placeholder
        color: oc.$dark-3
        @include vars.font-m
        display: flex
        align-items: center
        user-select: none
        height: vars.$size-2
        width: 100%
        cursor: text
      .btn-deselect, .btn-expand
        appearance: none
        outline: none
        border: none
        color: vars.$c-text-2
        background: transparent
        position: absolute
        right: 0
        :global(svg)
          transform: scale(0.6)
      .btn-deselect
        cursor: pointer
</style>
