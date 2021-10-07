<script>
  import Card from './Card.svelte'
  export let items
</script>

<ul class="flex flex-row flex-nowrap justify-start items-top gap-x-4 overflow-scroll">
  {#each items as {id, title, paragraph, image} }
    <li id={id} class="flex flex-col">
      <Card
        id={id}
        title={title}
        paragraph={paragraph}
        image={image}
        cardStyle="shadow-lg flex-auto w-60 m-6 lg:w-80"
      />
    </li>
  {/each}
</ul>