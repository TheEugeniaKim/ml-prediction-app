<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	button,
		button:link,
		button:visited {
			text-transform: uppercase;
			text-decoration: none;
			padding: 1rem 1rem;
			border-radius: 3rem;
			-webkit-transition: all 0.2s;
			transition: all 0.2s;
			position: relative;
			font-size: 100%;
			border: 1px solid #7dba00;
			cursor: pointer;
			margin: auto;
			color: #00a950;
		}
	
	button:hover,
	button:link:hover,
	button:visited:hover {
		-webkit-transform: translateY(-3px);
		transform: translateY(-3px);
		-webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2)
	}
	
	button:hover::after,
	button:link:hover::after,
	button:visited:hover::after {
		-webkit-transform: scaleX(1.4) scaleY(1.6);
		transform: scaleX(1.4) scaleY(1.6);
		opacity: 0
	}
	
	button:active,
	button:focus,
	button:link:active,
	button:link:focus,
	button:visited:active,
	button:visited:focus {
		outline: none;
		-webkit-transform: translateY(-1px);
		transform: translateY(-1px);
		-webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
		-webkit-transform: rotateX(90deg);
		transform: rotateX(90deg);
	}
	
	button::after {
		content: "";
		display: inline-block;
		height: 100%;
		width: 100%;
		border-radius: 10rem;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		-webkit-transition: all 0.4s;
		transition: all 0.4s
	}
</style>

<script>
	import {goto} from '@sapper/app';

	function handle_click(){
		goto('machine-learning')
	}
</script>

<svelte:head>
	<title>Pfizer Demo</title>
</svelte:head>

<h1>Welcome!</h1>

<figure>
	<img alt='Pfizer-Logo' src='pfizer-logo.png'>
	<figcaption>Pfizer INC: Working for a healthier world</figcaption>
</figure>

<p><strong>Applied Machine Learning techniques to Photo</strong></p>

<button class="button" on:click={handle_click}>Check It Out</button>
