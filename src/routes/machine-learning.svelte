<style>
  .container {
    display: inline-block
  }
  
  button, .button,
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

<script>
  import Modal from '../components/Modal.svelte'
  import Content from '../components/Content.svelte'
  let files 

  function handlePic(){
    return "blooop"
  }

</script>

<br/>

<h1>Hello this is the machine learning view</h1>
<p>Please upload a photo or take a picture of some text.</p>

<div class="container">

  <input class="button" type="file" bind:files>
  {#if files && files[0]} 
    {files[0].name}
  {/if}

  or

  <Modal>
    <Content />
  </Modal>
  
</div>


<button on:click={handlePic}>Submit</button>
