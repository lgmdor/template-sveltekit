<script>
import IconClose from "$icons/cancel.svg?component";
import { Overlay } from "./../Misc/misc.js";

export let title;
export let show = false;

const open = (e) => {
	show = true;
};

const close = () => {
	show = false;
};

const sex = () => console.log("sex");
</script>

<!--------markup-------->

<div class="wrap-button-open" on:click|stopPropagation={open}>
	<slot name="buttonOpen" />
</div>

{#if show}
	<Overlay on:click={close}>
		<div class="modal">
			<div class="top">
				<h2>{title}</h2>
				<button class="close" on:click={close}>
					<IconClose />
				</button>
			</div>
			<div class="content">
				<slot />
			</div>
			<div class="bottom">
				<div class="wrap-button-save" on:click={close}>
					<slot name="buttonSave" />
				</div>
			</div>
		</div>
	</Overlay>
{/if}

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .wrap-button-open
    display: grid

  .modal
    border-radius: vars.$br-m
    padding: vars.$space-l
    background: oc.$dark-7
    width: vars.$size-24
    .top
      display: flex
      justify-content: space-between
      .close
        height: 100%
        border-radius: vars.$br-m
        cursor: pointer
        @include vars.transition(background)
        appearance: none
        background: transparent
        border: none
        color: vars.$c-text-1
        &:hover
          background: oc.$dark-6
        :global(svg)
          transform: scale(0.75)
          aspect-ratio: 1
      h2
        @include vars.font-l
    .content
      display: grid
      gap: vars.$size-1
      margin: vars.$space-l 0
    .bottom
      display: grid
      .wrap-button-save
        display: grid
</style>
