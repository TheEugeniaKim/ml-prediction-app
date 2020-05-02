const key = {}

let stream 

const constraints = {
  audio: true,
  video: {
    width: 600, height: 500
  }
}

const vidInit = async function init(){
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints)
    handleSuccess(stream)
  }
  catch(e){
    console.log("ERROR", e)
  }
}


export { constraints, key, vidInit }