<!-- src/routes/blog/+page.svelte -->
<svelte:head>
  <title>Mikkel Ridley - Blog</title>
</svelte:head>


<script>
  export let data;
</script>

<div class="container">
  <h1>My Articles</h1>
  <div class="blogposts">
    {#each data.blogposts as post}
    <div class="post">
      <p class="readmore">
        <a style="color: rgb(10, 10, 139);" href={`/blog/${post.slug}`}>
          <img src={post.social_image} alt={post.title} />
        </a>
      </p>
      <!-- <p>{post.description}</p> -->
    </div>
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 800px;
    margin: 50px auto;
  }
  .blogposts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .post {
    /* border: 1px solid #ddd; */
    /* padding: 10px; */
    /* box-shadow: 0 0 10px #eee; */
  }
  h2 { margin: 0; }
  .readmore {
    color: rgb(10, 10, 139);
    text-align: right;
    margin: 20px 0 0 0;
  }
  .readmore img {
    max-width: 100%;
  }
  .readmore:hover {
    color: green;
  }
</style>