<script>
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	// import { clickOutside } from '../lib/click_outside';

	// import { clickoutside } from '@svelte-put/clickoutside';

	// function toggleOpen(node) {
	// 	const handleClick = (event) => {
	// 		if (!node != event.target) {
	// 			if (open === false) {
	// 				open = !open;
	// 			}
	// 		}
	// 	};

	// 	document.addEventListener('click', handleClick, true);

	// 	// return {
	// 	// 	destroy() {
	// 	// 		document.removeEventListener('click', handleClick, true);
	// 	// 	}
	// 	// };
	// }
	const links = [
		{ path: '', text: 'Home' },
		{ path: 'about', text: 'About' },
		{ path: 'blog', text: 'Blog' }
		//   {path: 'projects', text: 'Projects'},
		//   {path: 'contact', text: 'Contact'},
	];
	export let open;
</script>

{#if open}
	<div class="mobile-menu" >
		{#each links as link, i}
			<p>
				<a
					class="menu-link"
					href="/{link.path}"
					on:click={() => (open = !open)}
					on:keydown={() => (open = !open)}
					transition:fly={{ y: -15, delay: 50 * i }}
				>
					{link.text}
				</a>
			</p>
		{/each}
		<div class="bar" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
	</div>
{/if}

<style>
	:global(html) {
		/* background: #1d1d2f; */
	}
	.mobile-menu {
		text-align: center;
		font-size: 1.5em;
		letter-spacing: 0.15em;
		padding: 1em;
		padding-top: 0;
		/* color: #eef; */
		position: fixed;
		top: calc(2rem + 59px);
		left: 0;
		right: 0;
		z-index: 1;
		background-color: white;
	}
	.menu-link {
		cursor: pointer;
		width: max-content;
		margin: 1rem auto;
	}
	.menu-link:hover {
		text-decoration: underline;
	}
	.bar {
		border-style: solid;
		/* border-color: white; */
		border-width: 1px;
		height: 0;
	}
</style>
