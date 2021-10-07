<script>
	import NavigatorBar from './components/NavigatorBar.svelte'
	import Landing from './sections/Landing.svelte'
	import Quirk from './sections/Quirk.svelte'
	import About from './sections/About.svelte'
	import Example from './sections/Example.svelte'
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com"> 
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
	<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&family=IBM+Plex+Sans+Thai+Looped&display=swap" rel="stylesheet">
</svelte:head>

<NavigatorBar />
<Landing />
<Quirk />
<About />
<Example />

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>