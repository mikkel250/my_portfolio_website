<!-- src/routes/about/+page.svelte -->
<svelte:head>
  <title>Mikkel Ridley - About</title>
</svelte:head>

<div class="main_container">
  <section>
    <div class="inner-container">
      <h2 class="about-title">I'm Mikkel Ridley👋</h2>
      <div class="about-subtitle">
        <p>A San Francisco based Software Engineer with a solid background in Web Development, I'm passionate about building beautiful front ends and that are easy for everyone to use. I develop visually compelling applications with user-friendly interactions that meet business goals and improve user experience.</p>
        <p>When I'm not solving problems, I love to explore exciting new technologies, most recently Svelte and SvelteKit, which were used to build this portfolio. I'm also excited to work more with React (or Angular) in my next role. I also have a software development company, Coding Concepts, working as a contractor on Shopify projects. When I'm not creating software, I also enjoy riding my Stromer bicycle, spending time with my cat, partner, friends, and family, walking along Mission Creek, visiting my partner's family in Portugal and Switzerland, and travelling the rest of the globe whenever I'm able.</p>
        <p>Creating magic daily on the internet. You can send me an email at <span class="info-text"><a href="mailto:mikkel250@gmail.com" target="_blank" rel="noopener noreferrer">mikkel250@gmail.com</a></span> or <span class="info-text"><a href="https://appt.link/lets-chat/mikkel-ridley" target="_blank" rel="noopener noreferrer">book a meeting with me right now!</a></span>
        </p>
      </div>
    </div>
  </section>
</div>

<style>
  .main_container {
    max-width: 1400px;
    margin: 0 5vw 0 5vw;
  }
  .about-title {
    font-size: 4.2rem;
    font-weight: bold;
    margin-top: 11rem;
  }
  .about-subtitle {
    margin-top: -2rem;
  }
  .about-subtitle > p {
    font-weight: normal;
    font-size: 1rem;
    line-height: 2rem;
  }
  .info-text {
    font-style: italic;
    font-weight: bold;
  }

  @media (min-width: 1400px) {
    .about-subtitle > p { width: 100%; }
  }
</style>