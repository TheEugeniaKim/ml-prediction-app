<script>
	import Nav from '../components/Nav.svelte';

	export let view;
</script>

<style>
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit; 
	}

	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		display: grid;
	}

</style>

<Nav {view}/>
<br/>
<br/>
<main>
	<slot></slot>
</main>