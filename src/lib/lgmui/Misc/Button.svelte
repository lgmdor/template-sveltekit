<script>
export let text;
</script>

<!--------markup-------->

<button class="lgmui button" on:click on:keydown>{text}</button>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  button
    min-width: vars.$size-4
    appearance: none
    border: none
    border-radius: vars.$br-m
    padding: 0 18px
    height: 36px
    @include vars.font-m
    font-weight: 600
    color: vars.$c-white
    background: vars.$c-main
    cursor: pointer
    @include vars.transition(all)
    &:hover
      background: darken(vars.$c-main, 2%)
    &:active
      transform: translateY(1px)
    &:focus-visible
      outline: 2px solid transparentize(vars.$c-white, .2)
</style>
