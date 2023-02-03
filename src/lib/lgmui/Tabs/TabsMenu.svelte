<script>
export let position = "no";
</script>

<!--------markup-------->

<nav
	class="lgmui tabs-menu"
	class:position-bottom={position === "bottom"}
	class:position-left={position === "left"}
>
	<ul>
		<slot />
	</ul>
</nav>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  nav
    &.position-bottom
      position: absolute
      bottom: 0
      left: 0
      right: 0
      border-bottom-left-radius: vars.$border-radius
      border-bottom-right-radius: vars.$border-radius
      ul
        grid-auto-columns: 1fr
        grid-auto-flow: column
        min-height: vars.$size-2
    &.position-left
      min-width: vars.$size-4
    ul
      list-style: none
      display: grid
      width: 100%
</style>
