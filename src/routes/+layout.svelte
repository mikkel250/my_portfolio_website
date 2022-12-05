<!-- src/routes/+layout.svelte -->
<script>
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from './Menu.svelte';

	export let open;
</script>

<nav>
	<div class="nav-container">
		<Hamburger class="mobile-menu" bind:open />

		<a href="/" class="nav-logo" title="Back to homepage">Mikkel Ridley</a>
		<div class="nav-links">
			<a href="/about" class="link">About</a>
			<a href="/blog" class="link">Blog</a>
			<!-- <a href="/projects" class="link">Projects</a> -->
			<!-- <a href="/contact" class="link">Contact</a> -->
		</div>
	</div>
</nav>

<Menu bind:open />

<div class="container">
	<!-- Pages will be injected below -->
	<slot />
</div>

<style>
	.container {
		max-width: 1400px;
		margin: 50px auto;
	}
</style>
