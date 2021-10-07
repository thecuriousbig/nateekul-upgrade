<script>
  import Container from '../components/Container.svelte'
  import List from '../components/List.svelte'

  const items = [
    { id: 1, title: 'กล่องใส่อาหารทรงกลม', paragraph: 'กล่องพลาสติก PET ทรงกลม ขนาดเส้นผ่านศูนย์กลาง 10 ซม.', image: '../assets/products/shell.jpg' },
    { id: 2, title: 'บรรจุภัณฑ์ใส่สินค้ารูปทรงแท่ง', paragraph: 'บรรจุภัณฑ์พลาสติกบริสเตอร์ PET รูปทรงสำหรับใส่สินค้ารูปทรงแท่ง เช่น สีเทียน ดินน้ำมัน', image: '../assets/products/blister_1.jpg' },
    { id: 3, title: 'บรรุภัณฑ์สินค้าบริสเตอร์ทรงสี่เหลี่ยม', paragraph: 'บรรจุภณฑ์พลาสติกบริสเตอร์ PET รูปทรงสี่เหลี่ยม สำหรับใส่สินค้า', image: '../assets/products/blister_2.jpg' },
    { id: 4, title: 'บรรจุภัณฑ์สินค้าบริสเตอร์ทรงแท่ง', paragraph: 'บรรจุภัณฑ์พลาสติกบริสเตอร์ PET รูปทรงแท่ง สำหรับใส่สินค้า', image: '../assets/products/blister_3.jpg' },
    { id: 5, title: 'บรรจุภัณฑ์สินค้าแบบสไลด์แพ๊ค', paragraph: 'บรรจุภัณฑ์พลาสติกสไลด์แพ๊ค เนื้อ PET สำหรับบรรจุสินค้า', image: '../assets/products/slide_pack.jpg' },
    { id: 6, title: 'บรรจุภัณฑ์สินค้าแบบถาด', paragraph: 'บรรจุภัณฑ์พลาสติกแบบถาด เนื้อ PET สำหรับบรรจุสินค้า', image: '../assets/products/tray.jpg' },
  ]
  
</script>

<section id="example" class="w-auto">
  <Container>
    <h2 class="mx-auto py-4 text-center text-4xl">ตัวอย่างผลิตภัณฑ์</h2>
  </Container>
  <List items={items} />
</section>