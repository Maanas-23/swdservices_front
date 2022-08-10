<script lang="ts">
  import websites from "./assets/portals.json";
  import Website from "./Website.svelte";
  import logoSrc from "./assets/img/BITS-logo.png";
  import imgSrc from "./assets/img/right.svg";
</script>

<div class="App">
  <div class="App-left">
    <div class="App-header">
      <h1>SWD Services</h1>
    </div>
    <div class="Websites-cont">
      {#each websites as website}
        <Website {website} />
      {/each}
    </div>
    <div class="developer">
      <strong
        ><a href="https://swdservices.bits-pilani.ac.in/Developers"
          >Developers</a
        ></strong>
      | <a href="https://bits-dvm.org">DVM, BITS Pilani</a>
    </div>
  </div>
  <div class="App-right">
    <div class="rightImg-cont">
      <img src={imgSrc} alt="Right section" class="rightImg" />
    </div>
    <div class="triangle" id="triangle-1" />
    <div class="triangle" id="triangle-2" />
    <div class="triangle" id="triangle-3" />
  </div>
  <div class="logo"><img src={logoSrc} alt="BITS Logo" /></div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap");
  :global(*) {
    font-family: "Lato", sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :global(body) {
    height: 100vh;
  }

  :global(#app) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(a) {
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
  }

  .App {
    display: flex;
    width: 90vw;
    height: 95vh;
    position: relative;
  }

  .App-left {
    width: 60%;
    background-color: #290475;
    padding: 100px 50px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h1 {
    font-size: 3rem;
    color: white;
  }

  .Websites-cont {
    border-radius: 10px;
    overflow: hidden;
  }

  .developer {
    font-size: 1rem;
    color: white;
    align-self: center;
  }

  .logo {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .logo img {
    width: clamp(250px, 18vw, 400px);
    height: auto;
  }

  .App-right {
    position: relative;
    display: flex;
    background-color: #f8f8ff;
    flex-direction: row;
    justify-content: center;
    width: 40%;
  }

  .rightImg-cont {
    align-self: center;
    width: 75%;
  }

  .rightImg {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1100px) {
    .App {
      flex-direction: column-reverse;
      height: auto;
      width: 80vw;
    }

    .logo {
      top: 0;
      right: 10px;
    }

    .App-right {
      height: 30vh;
      width: 100%;
    }

    .rightImg-cont {
      height: 80%;
      width: auto;
      align-self: flex-end;
    }

    .App-left {
      width: 100%;
      padding: 25px 15px;
      align-items: center;
    }

    .Websites-cont {
      margin: 20px 0;
    }

    h1 {
      font-size: 2.25rem;
    }

    .developer {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 500px) {
    .logo {
      left: 0;
      top: 0;
    }

    h1 {
      font-size: 1.75rem;
    }

    .rightImg-cont {
      display: none;
    }

    .App-right {
      height: 12vh;
    }

    .developer {
      font-size: 0.6rem;
    }
  }
</style>
