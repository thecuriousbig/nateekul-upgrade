<script>
  export let id
  export let title
  export let paragraph
  export let image
</script>


<div class="flex flex-col w-full m-6 overflow-hidden sm:w-60">
  <article id={id}>
    <picture class="block">
      <img src={image} alt="card" class="mx-auto" />
    </picture>
    <div class="py-2 px-4 w-full text-primary-white text-center">
      <h3 class="mt-2 text-xl">{title}</h3>
      <p class="p-3 text-base">{paragraph}</p>
    </div>
  </article>
</div>
