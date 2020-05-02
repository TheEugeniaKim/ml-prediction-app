<script>
  import { onMount } from 'svelte'
  import { getContext } from 'svelte' 
  import { constraints, key, vidInit } from './stores.js'

  onMount(() => {
    vidInit()
  })  
  
  function handleSuccess(stream){
    window.stream = stream 
    video.srcObject = stream 
  }

  // const { context } = getContext(key)
  // const img = context()

  // function handleSnap(img){

  //   img = context.drawImage(video, 0, 0, 500,500)
  // }

</script>

<h1>Hello Welcome to Temorary Camera View</h1> 

<div class="video-wrap">
  <video key="vid" id="video" playsinline autoplay></video>
</div>

<div class="controller">
  <button id="snap" >Take Snapshot</button>
</div> 

<canvas id="canvas" width="500" height="500"></canvas>

