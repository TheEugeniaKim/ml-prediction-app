<script>
  import { setContext as baseSetContext } from 'svelte';
  import { fade } from 'svelte/transition';

  export let key = 'simple-modal';
  export let closeButton = true;
  export let closeOnEsc = true;
  export let closeOnOuterClick = true;
  export let styleBg = { top: 0, left: 0 };
  export let styleWindow = {};
  export let styleContent = {};
  export let setContext = baseSetContext;
  export let transitionBg = fade;
  export let transitionBgProps = { duration: 250 };
  export let transitionWindow = transitionBg;
  export let transitionWindowProps = transitionBgProps;

  const defaultState = {
    closeButton,
    closeOnEsc,
    closeOnOuterClick,
    styleBg,
    styleWindow,
    styleContent,
    transitionBg,
    transitionBgProps,
    transitionWindow,
    transitionWindowProps,
  };
  let state = { ...defaultState };

  let Component = null;
  let props = null;

  let background;
  let wrap;

  const camelCaseToDash = str => str
    .replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();

  const toCssString = (props) => Object.keys(props)
    .reduce((str, key) => `${str}; ${camelCaseToDash(key)}: ${props[key]}`, '');

  $: cssBg = toCssString(state.styleBg);
  $: cssWindow = toCssString(state.styleWindow);
  $: cssContent = toCssString(state.styleContent);
  $: currentTransitionBg = state.transitionBg;
  $: currentTransitionWindow = state.transitionWindow;

  const toVoid = () => {};
  let onOpen = toVoid;
  let onClose = toVoid;
  let onOpened = toVoid;
  let onClosed = toVoid;

  const open = (
    NewComponent,
    newProps = {},
    options = {},
    callback = {}
  ) => {
    Component = NewComponent;
    props = newProps;
    state = { ...defaultState, ...options };
    onOpen = callback.onOpen || toVoid;
    onClose = callback.onClose || toVoid;
    onOpened = callback.onOpened || toVoid;
    onClosed = callback.onClosed || toVoid;
  };

  const close = (callback = {}) => {
    onClose = callback.onClose || onClose;
    onClosed = callback.onClosed || onClosed;
    Component = null;
    props = null;
  };

  const handleKeyup = ({ key }) => {
    if (state.closeOnEsc && Component && key === 'Escape') {
      event.preventDefault();
      close();
    }
  };

  const handleOuterClick = (event) => {
    if (
      state.closeOnOuterClick && (
        event.target === background || event.target === wrap
      )
    ) {
      event.preventDefault();
      close();
    }
  };

  setContext(key, { open, close });
</script>

<style>
  * {
    box-sizing: border-box;
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

  .bg {
    position: fixed;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.66);
  }

  .window-wrap {
    position: relative;
    margin: 2rem;
    max-height: 100%;
  }

  .window {
    position: relative;
    width: 40rem;
    max-width: 100%;
    max-height: 100%;
    margin: 2rem auto;
    color: black;
    border-radius: 0.5rem;
    background: white;
  }

  .content {
    position: relative;
    padding: 1rem;
    max-height: calc(100vh - 4rem);
    overflow: auto;
  }

  .close {
    display: block;
    box-sizing: border-box;
    position: absolute;
    z-index: 1000;
    top: 1rem;
    right: 1rem;
    margin: 0;
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;
    border: 0;
    color: black;
    border-radius: 1.5rem;
    background: white;
    box-shadow: 0 0 0 1px black;
    transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
                background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
    -webkit-appearance: none;
  }

  .close:before, .close:after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    width: 1rem;
    height: 1px;
    background: black;
    transform-origin: center;
    transition: height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
                background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .close:before {
    -webkit-transform: translate(0, -50%) rotate(45deg);
    -moz-transform: translate(0, -50%) rotate(45deg);
    transform: translate(0, -50%) rotate(45deg);
    left: 0.25rem;
  }

  .close:after {
    -webkit-transform: translate(0, -50%) rotate(-45deg);
    -moz-transform: translate(0, -50%) rotate(-45deg);
    transform: translate(0, -50%) rotate(-45deg);
    left: 0.25rem;
  }

  .close:hover {
    background: black;
  }

  .close:hover:before, .close:hover:after {
    height: 2px;
    background: white;
  }

  .close:focus {
    border-color: #3399ff;
    box-shadow: 0 0 0 2px #3399ff;
  }

  .close:active {
    transform: scale(0.9);
  }

  .close:hover, .close:focus, .close:active {
    outline: none;
  }
</style>

<svelte:window on:keyup={handleKeyup}/>

<div>
  {#if Component}
    <div
      class="bg"
      on:click={handleOuterClick}
      bind:this={background}
      transition:currentTransitionBg={state.transitionBgProps}
      style={cssBg}
    >
      <div class="window-wrap" bind:this={wrap}>
        <div
          class="window"
          transition:currentTransitionWindow={state.transitionWindowProps}
          on:introstart={onOpen}
          on:outrostart={onClose}
          on:introend={onOpened}
          on:outroend={onClosed}
          style={cssWindow}
        >
          {#if state.closeButton}
            <button on:click={close} class="close"></button>
          {/if}
          <div class="content" style={cssContent}>
            <svelte:component this={Component} {...props} />
          </div>
        </div>
      </div>
    </div>
  {/if}
  <slot></slot>
</div>