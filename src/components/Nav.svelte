<script>
  export let view;
</script>

<style>
  .navbar {
    height: 5vh;
    width: 100vw; 
    top: 0; 
    overflow: hidden;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    padding-left: 0;
    z-index: 1;
    border-bottom: solid 1px var(--primary-color);
    opacity: 0.9;
    margin-bottom: 1rem;
    background-color: #0070BF;
    box-shadow: 0px 8px 5px 0px #818482;
  }

  .navbar ul {
    display: flex;
    list-style-type: none;
  }


  .navbar a {
    color: #fff;
    padding: 0.45rem;
    margin: 0 2rem;
  }

  .navbar a:hover {
    color: #00AFF0;
  }

</style>

<div class="navbar">

  <ul>
    <li> <a class='{view === undefined ? "selected": ""}' href='.'> Home </a></li>
    <li> <a class='{view === "about" ? "selected": ""}' href='about'> About </a></li>
    <li> <a class='{view === "machine-learning" ? "selected": "machine-learning"}' href='machine-learning'> Machine Learning View </a></li>
    <li> <a class='{view === "about" ? "selected": "temp-cam"}' href='temp-cam'> Temporary Cam </a></li>

  </ul>

</div>