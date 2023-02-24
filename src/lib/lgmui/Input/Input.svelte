<script>
export let optional = false;
export let label;
export let placeholder = "";
export let type = "text";
export let value = "";
export let autoFocus = false;

const focusAuto = (node) => {
	if (autoFocus) {
		node.focus();
	}
};
</script>

<!--------markup-------->

<div class="lgmui input">
	<label for=""
		>{label}
		{#if !optional}
			<span>*</span>
		{/if}
	</label>
	{#if type === "text"}
		<input type="text" {placeholder} bind:value use:focusAuto />
	{:else if type === "time"}
		<input type="time" bind:value use:focusAuto />
	{:else if type === "textarea"}
		<textarea bind:value {placeholder} use:focusAuto />
	{/if}
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .input
    label
      display: block
      @include vars.font-m
      font-weight: 500
      color: vars.$c-text-1
      word-break: break-word
      cursor: default
      margin-bottom: 2px
      span
        color: oc.$red-9
    input, textarea
      min-width: vars.$size-8
      width: 100%
      border-radius: vars.$br-m
      border: none
      outline: none
      appearance: none
      resize: none
      @include vars.font-m
      border: vars.$border-light
      background: oc.$dark-6
      font-family: vars.$font-family
      color: vars.$c-text-1
      @include vars.transition(border)
      &::placeholder
        color: oc.$dark-3
      &:focus
        border: 1px solid vars.$c-main
    input
      padding: 0 vars.$space-s
      height: 36px
      &::-webkit-calendar-picker-indicator
        filter: invert(60%)
    textarea
      padding: vars.$space-s
      resize: vertical
      min-height: vars.$size-4
      max-height: vars.$size-16
</style>
