<script>
import { getContext } from "svelte";
import { key } from "./Menu.svelte";

export let danger = false;

const { show } = getContext(key);

const hide = () => show.set(false);
</script>

<!--------markup-------->

<li
	on:click|stopPropagation
	on:click={hide}
	on:keydown|stopPropagation
	on:keydown={hide}
	class="lgmui menu-item"
	class:danger
>
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
    border-radius: vars.$br-m
    cursor: pointer
    user-select: none
    &:hover
      background: oc.$dark-4
    &.danger
      color: oc.$red-8
      &:hover
        background: transparentize(oc.$red-8, 0.8)
</style>
