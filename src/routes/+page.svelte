<!-- src/routes/+page.svelte -->
<svelte:head>
	<title>Mikkel Ridley - Home</title>
</svelte:head>

<div class="container">
	<div class="info">
		<div class="animate-background">
			<div class="container info-container">
				<div class="info-text">
					<h1>
						<p class="animate-text-1">Software Engineer with Front End Expertise</p>
					</h1>
				</div>
				<div class="subtitle-container">
					<h2 class="subtitle">
						<p>Putting the "art" into the cart, one pixel at a time.</p>
						<p>I enjoy making beautiful, smart websites.</p>
					</h2>
					<p style="color:black" class="scroll-button animate-scroll" tabindex="0">
						<a class="learn-more" href="/about"><span>Learn More About Me</span><span class="arrow">→</span></a>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="background-div" />

<style lang="scss">
	.info {
		text-align: center;
		position: relative;
	}
	.info-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		text-align: left;
	}
	.container {
		max-width: 1400px;
		margin: 0 5vw 0 5vw;
	}
	.info h1 {
		font-size: 2rem;
		margin: 0;
		text-align: left;
		line-height: 130%;
		width: fit-content;
		font-weight: 800;
		letter-spacing: -0.03em;
	}
	.info h2 {
		font-size: 1.2rem;
		max-width: 65ch;
		font-weight: 200;
		margin-top: 0.5rem;
	}
	.subtitle-container {
		background-color: var(--background);
		padding: 25px;
		width: 100%;
	}
	/* .background-div {
    
    width: 100%;
    height: 75vh;
    margin: -255px auto;
  } */
	.info .info-text {
		position: relative;
	}
	.scroll-button {
		display: flex;
		border: none;
		outline: none;
		cursor: pointer;
	}
	.scroll-button .arrow {
		margin-left: 0.5rem;
	}
	@media (min-width: 768px) {
		.info h1 {
			font-size: 4rem;
		}
		.container {
			max-width: 1400px;
			margin: 190px 2.5rem 0 2.5rem;
		}
		.arrow {
			transition: transform 300ms;
		}
		.learn-more {
			.arrow {
				margin-left: .5rem;
				transition: transform 750ms;
			}
			&:hover {
        color: blue;
				.arrow {
					transform: translateX(20px);
          display: inline-block;
				}
			}
		}
	}
</style>
