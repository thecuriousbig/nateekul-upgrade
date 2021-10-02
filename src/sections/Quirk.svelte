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
      {#each totalQuirk as quirk}
        <Card
          id={quirk.id}
          title={quirk.title}
          paragraph={quirk.paragraph}
          image={quirk.image}
        />
      {/each}
    </div>
  </Container>
</section>