<script>
  import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	
	import Dialog from './Dialog.svelte'

  const { open } = getContext('simple-modal');
	
	let opening = false;
	let opened = false;
	let closing = false;
	let closed = false;

  const showPopup = () => {
		open(Popup, { message: "It's a popup!" });
	};
	const showPopupLong = () => {
		open(PopupLong, { message: "It's a popup with long text!" });
	};
	const showPopupCustom = () => {
		open(
			Popup,
			{
				message: "It's a customized popup!"
			},
		  {
				styleBg: {
					background: 'rgba(200, 255, 0, 0.66)'
				},
				styleWindow: {
					border: '2px solid #00beff',
					boxShadow: 'inset 0 0 0 2px white, 0 0 0 2px white',
					background: '#ff7000'
				},
				styleContent: {
					color: '#9500ff',
					fontFamily: 'Comic Sans',
					fontStyle: 'italic'
				},
				transitionWindow: fly,
				transitionWindowProps: {
					y: 100,
					duration: 1000
				},
			},
			{
				onOpen: () => {
					opening = true;
				},
				onOpened: () => {
					opening = false;
					opened = true;
				},
				onClose: () => {
					opened = false;
					closing = true;
				},
				onClosed: () => {
					closing = false;
					closed = true;
					setTimeout(() => { closed = false; }, 1000);
				}
			}
		);
	};
	
	let name;
	let status = 0;
	
	const onCancel = (text) => {
		name = '';
		status = -1;
	}
	
	const onOkay = (text) => {
		name = text;
		status = 1;
	}

  const showDialog = () => {
		open(
			Dialog,
			{
				message: "What is your name?",
				hasForm: true,
				onCancel,
				onOkay
			},
			{
				closeButton: false,
    		closeOnEsc: false,
    		closeOnOuterClick: false,
			}
	  );
	};
</script>

<section>
	<button on:click={showDialog}>Take A Pic</button>

	{#if status === 1}
		<p>Hi {name}! 👋</p>
	{:else if status === -1}
		<p><em>Dialog was canceled</em></p>
	{/if}

	<div id="state">
		{#if opening}
			<p>opening modal...</p>
		{:else if opened}
			<p>opened modal!</p>
		{:else if closing}
			<p>closing modal...</p>
		{:else if closed}
			<p>closed modal!</p>
		{/if}
	</div>
</section>

<style>
	section {
		padding-top: 0.5em;
	}
	
	#state {
		position: absolute;
		top: 0;
		right: 0;
		opacity: 0.33;
		font-size: 0.8em;
	}

  button,
		button:link,
		button:visited {
			text-transform: uppercase;
			text-decoration: none;
			padding: 0.5rem 1rem;
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