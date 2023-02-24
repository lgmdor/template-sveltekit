<script>
import IconCancel from "$icons/cancel.svg?component";
import { key } from "./Multiselect.svelte";
import { getContext } from "svelte";

export let content = "tag";

const { deselectItem } = getContext(key);

const deselect = (node) => deselectItem(content);
</script>

<!--------markup-------->

<div class="wrap">
	<div class="wrap-content">
		<span>{content}</span>
		<button on:click|stopPropagation={deselect}>
			<IconCancel />
		</button>
	</div>
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .wrap
    height: vars.$size-2
    @include vars.center
    margin-right: vars.$space-s
    .wrap-content
      background: oc.$dark-7
      padding-left: vars.$space-s
      @include vars.center
      border-radius: vars.$br-m
      span
        @include vars.font-s-bold
        cursor: default
        user-select: none
        white-space: nowrap
      button
        appearance: none
        border: none
        outline: none
        height: 100%
        aspect-ratio: 1
        background: transparent
        color: vars.$c-text-1
        cursor: pointer
        @include vars.center
        :global(svg)
          transform: scale(0.5)
</style>
