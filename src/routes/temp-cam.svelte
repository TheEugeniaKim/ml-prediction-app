<script>
	import { onMount } from 'svelte';

  onMount(() => {
    init()
  })

  let context
  let stream 
  let img
  
  const constraints = {
    audio: true,
    video: {
      width: 600, height: 500
    }
  }

  async function init(){
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints)
      handleSuccess(stream)
    }
    catch(e){
      console.log("ERROR", e)
    }
  }

  function handleSuccess(stream){
    window.stream = stream 
    video.srcObject = stream 
  }

  //// context = canvas.getContext('2d')

  function handleSnap(){
    drawImage(video, 0, 0, 500,500)
  }

</script>

<h1>Hello Welcome to Temorary Camera View</h1> 

<div class="video-wrap">
  <video id="video" playsinline autoplay></video>
</div>

<div class="controller">
  <button id="snap" on:click={handleSnap}>Take Snapshot</button>
</div> 

<canvas id="canvas" width="500" height="500">{img}</canvas>

