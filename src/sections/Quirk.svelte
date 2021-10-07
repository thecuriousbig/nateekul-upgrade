<script>
  import Container from '../components/Container.svelte'
  import Card from '../components/Card.svelte'

const totalQuirk = [
  {
    id: 'prompt service',
    title: 'บริการรวดเร็วฉับไว',
    paragraph: 'prompt service',
    image: '../assets/artworks/stopwatch-linear.png'
  },
  {
    id: 'Quality Assurance',
    title: 'ใส่ใจคุณภาพ',
    paragraph: 'quality assurance',
    image: '../assets/artworks/package-linear.png'
  },
  {
    id: 'Strategically Consultance',
    title: 'ยินดีให้คำปรึกษา',
    paragraph: 'Strategically Consultance',
    image: '../assets/artworks/info-center-linear.png'
  }
]
</script>

<section id="quirk" class="w-full bg-primary-black">
  <Container>
    <div class="flex flex-wrap justify-center">
      {#each totalQuirk as {id, title, paragraph, image} }
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
      {/each}
    </div>
  </Container>
</section>