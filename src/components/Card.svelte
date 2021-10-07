<script>
  export let id
  export let title = 'card title'
  export let subtitle
  export let paragraph
  export let image
</script>


<article id={id} class={$$props.cardStyle}>
  <picture class="block">
    <img src={image} alt="card" class="mx-auto" />
  </picture>
  <div class="py-2 px-4 w-full ">
    <h3 class="text-lg font-bold">{title}</h3>
    {#if subtitle}
      <h4 class="text-base text-secondary-gray-300">{subtitle}</h4>  
    {/if}
    {#if paragraph}
      <p class="text-sm">{paragraph}</p> 
    {/if}
  </div>
</article>
