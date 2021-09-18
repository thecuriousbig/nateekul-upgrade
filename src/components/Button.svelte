<script>
  const props = {
    class: [$$restProps.class]
  }
</script>

<button
  type="button"
  class="font-sans text-base p-2"
  on:click
  on:hover
  on:mousedown
  {...props}
>
  <slot />
</button>

