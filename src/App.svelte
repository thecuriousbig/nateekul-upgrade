<script>
	import NavigatorBar from './components/NavigatorBar.svelte'
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com"> 
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
	<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&family=IBM+Plex+Sans+Thai+Looped&display=swap" rel="stylesheet">
</svelte:head>

<NavigatorBar />

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>