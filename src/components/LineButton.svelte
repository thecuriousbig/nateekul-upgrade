<script>
  import Button from './Button.svelte'

  const handleClick = () => {
    console.log('Line Button Clicked')
  }

</script>

<Button class="bg-primary-green flex flex-row items-center rounded-lg" on:click={handleClick}>
  <div class="p-2">
    <img src="../assets/icons/line.svg" alt="line button icon" />
  </div>
  <span class="py-2 px-4 text-primary-white text-base">ติดต่อเรา</span>
</Button>