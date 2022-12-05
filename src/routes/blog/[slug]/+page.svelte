<svelte:head>
	<title>Mikkel Ridley - Blog Post</title>
</svelte:head>
<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1><img class="title-img" src={data.article.social_image} alt={data.article.title} /></h1>
<p class="backlink">
	<a class="canonical" href={data.article.canonical_url} target="_blank" rel="noopener noreferrer">View original post on Dev.to</a>
</p>
<div>{@html data.article.body_html}</div>

<!-- <svelte:component this={ this.data.article.body_markdown } /> -->
<style>
	.backlink {
		text-align: center;
	}
	.canonical:hover {
		color: blue;
	}
	h1 {
		margin: 0 auto;
		max-width: 50%;
	}
	.title-img {
		max-width: 100%;
	}
</style>
