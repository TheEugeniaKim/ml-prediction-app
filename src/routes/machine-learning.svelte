<style>

h1 {
  text-align: center;
}

p {
  text-align: center;
}

.container {
  align-content: center;
  justify-content: center;
}

canvas {
  border: 1px solid black;
  top:10%;  
  left:10%;
  border:2px solid;
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
  let canvasElement
  let mouseDown = false
  let flag = false 
  let ctx 
  let color = 'black' 
  let thickness = 2
  const mousePos = {
    x: null,
    y: null, 
    prevX: null,
    prevY: null
  }

  function trackMouse({ x, y, type }) {
    if (type === "mousedown") {
      mousePos.prevX = mousePos.x 
      mousePos.prevY = mousePos.y 
      mousePos.x = x - canvasElement.offsetLeft
      mousePos.y = y - canvasElement.offsetTop
      mouseDown = true;
      flag = true 
      if (flag){
        ctx.beginPath()
        ctx.fillStyle = color 
        ctx.fillRect(mousePos.x, mousePos.y, 2, 2)
        ctx.closePath()
        flag = false
      }
    }
    if (type === "mouseup" || type === "mouseout") {
      mouseDown = false;
    }
    if (mouseDown) {
      mousePos.prevX = mousePos.x 
      mousePos.prevY = mousePos.y
      mousePos.x = x - canvasElement.offsetLeft
      mousePos.y = y - canvasElement.offsetTop
      drawImage(x, y);
    }
    if (type === "mousemove"){
      if (mouseDown){
        mousePos.prevX = mousePos.x 
        mousePos.prevY = mousePos.y 
        mousePos.x = x - canvasElement.offsetLeft
        mousePos.y = y - canvasElement.offsetTop
        drawImage()
      }
    }
  }

  function drawImage(){
    ctx = canvasElement.getContext('2d')
    ctx.strokeStyle = color
    ctx.lineWidth = thickness
    ctx.beginPath()
    ctx.moveTo(mousePos.prevX, mousePos.prevY)
    ctx.lineTo(mousePos.x, mousePos.y)
    ctx.stroke();
    ctx.closePath();
  }

  function erase() {
    var m = confirm("Want to clear");
    if (m) {
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height)
    }
  }

  function submit(){

  }
</script>

<div class="container">
  <br/>

  <h1>Hello this is the machine learning view</h1>
  <p>Please draw a Number in the box area below</p>

  <canvas
    on:mousemove={trackMouse}
    on:mouseup={trackMouse}
    on:mousedown={trackMouse}
    on:mouseout={trackMouse}
    bind:this={canvasElement}
  ></canvas>

  <br/>

  <div>
    <button on:click={erase}>Clear</button> 
    <button on:click={submit}>Submit</button>
  </div>
</div>