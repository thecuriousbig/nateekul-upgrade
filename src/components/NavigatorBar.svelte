<script>
  import Container from './Container.svelte'
  const navigation = [
    { id: 'landing', text: 'หน้าแรก' },
    { id: 'about', text: 'เกี่ยวกับ' },
    { id: 'products', text: 'ตัวอย่างผลิตภัณฑ์' },
    { id: 'services', text: 'รูปแบบการบริการ' },
    { id: 'contact', text: 'ติดต่อเรา' },
  ]
  let isOpenMenu = false

  const handleOpenMenu = () => {
    isOpenMenu = !isOpenMenu
  }

</script>

<header class="z-50 sticky top-0">
  <nav class="bg-secondary-gray-600 border border-secondary-gray-900">
    <Container>
      <div class="flex justify-between items-center h-16">
  
        <!-- website logo -->
        <a href="#landing" class="flex items-center px-2">
          <div class="w-10 h-10 rounded-full bg-primary-white mr-2 lg:mr-4">
            <img src="/assets/logo.png" alt="logo" class="w-10 h-10 rounded-full" />
          </div>
          <span class="font-serif text-primary-white text-sm lg:text-base">
            บริษัท นทีกุล จำกัด
            <br />
            NATEEKUL CO., LTD
          </span>
        </a>
  
        <!-- primary navigation menu -->
        <div class="hidden md:flex items-center space-x-1 h-full">
          {#each navigation as item}
            <a id="primary-{item.id}" href="#{item.id}" class="h-full flex items-center px-2 font-serif text-primary-white border-primary-white">{item.text}</a>
          {/each}
        </div>
        
        <!-- mobile navigation menu -->
        <button type="button" class="inline-flex md:hidden justify-center items-center" on:click={handleOpenMenu} aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">open main menu</span>
          <img src="/assets/icons/{isOpenMenu ? 'close' : 'menu'}.svg" alt="menu" />
        </button>
      </div>
    </Container>
  
    <!-- mobile menu, show/hide based on isOpenMenu variable -->
    {#if isOpenMenu}
      <div id="mobile-menu" class="sm:hidden border-t border-secondary-gray-900">
        <div class="px-2 py-2 space-y-1">
          <ul>
            {#each navigation as item}
            <li on:click={handleOpenMenu}>
              <a id="mobile-{item.id}" href="#{item.id}" class="text-primary-white font-serif block px-3 py-4 text-base text-center hover:bg-secondary-gray-900">{item.text}</a>
            </li>
            {/each}
          </ul>
        </div>
      </div>
    {/if}
  </nav>
</header>