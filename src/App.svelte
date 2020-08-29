<script>
	import State from './state';
	import ViewController from './ViewController.svelte'
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<ViewController />
	<button on:click={State.toRunning}>Click me</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>