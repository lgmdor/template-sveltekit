<script>
</script>

<!--------markup-------->

<div class="overlay" on:click|self on:keydown|self>
	<slot />
</div>

<!--------style-------->
<style lang="sass">
  @use 'src/vars'
  @use 'src/oc'

  .overlay
    position: fixed
    inset: 0
    display: grid
    place-content: center
    background: transparentize(oc.$dark-9, 0.2)
</style>
