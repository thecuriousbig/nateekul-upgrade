<script>
  import Container from '../components/Container.svelte'
  import LineButton from '../components/LineButton.svelte'

  
  
</script>

<section id="landing" class="h-72 sm:h-80 lg:h-96 bg-cover bg-left" style="background-image: url('../assets/background.jpg')">
    <Container>
      <div class="h-full flex flex-col justify-center items-center sm:items-start space-y-4 sm:space-y-8">
        <div class="text-center text-shadow sm:text-left sm:max-w-sm lg:max-w-lg">
          <h1 class="text-3xl sm:text-4xl lg:text-6xl tracking-tight text-primary-white my-4">
            <span class="block md:inline">รับขึ้นบรรจุภัณฑ์</span>
            <span class="block md:inline">พลาสติก</span>
          </h1>
          <p class="text-primary-white text-sm sm:text-base lg:text-lg">
            โรงงานรับขึ้นรูป, ผลิต, รับทำบรรจุภัณฑ์ พลาสติกวัสดุ PVC, PET, PS, PP และอื่น ๆ ตามความต้องการของลูกค้า
          </p> 
        </div>
        <!-- TODO: Make LineButton more shareable components -->
        <LineButton />
      </div>
    </Container>
</section>

<style>
  .text-shadow {
    text-shadow:1px 1px 2px black;
  }
</style>
