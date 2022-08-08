<script lang="ts">
  import websites from "./assets/portals.json";
  import Website from "./Website.svelte";
  import logoSrc from "./assets/img/BITS-logo.png";
  import imgSrc from "./assets/img/right.png";
</script>

<div class="App">
  <div class="App-header-mobile">
    <h1>Student Welfare Division <br/> Services</h1>
  </div>
  <div class="rightImg-cont-mobile">
    <img src={imgSrc} alt="Right section" class="rightImg" />
  </div>
  <div class="App-left">
    <div class="App-header">
      <h1>Student Welfare Division <br/> Services</h1>
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
  <div class="developer-mobile">
    <strong
      ><a href="https://swdservices.bits-pilani.ac.in/Developers"
        >Developers</a
      ></strong>
    | <a href="https://bits-dvm.org">DVM, BITS Pilani</a>
  </div>
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
  .App-header-mobile{
    display: none;
  }

  :global(#app) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .developer-mobile{
    display: none;
  }
  :global(a) {
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
  }
  .App-header>h1{
    font-size: 5rem;
    letter-spacing: 0.3rem;
  }
  .App {
    display: flex;
    width: 100vw;
    height: 100vh;
    position: relative;
  }

  .App-left {
    width: 60%;
    background-color: #290475;
    padding-inline: 6rem;
    padding-top: 8rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h1 {
    font-size: 3rem;
    color: white;
  }

  .Websites-cont {
    display: flex;
    flex-wrap: wrap;
  }

  .developer {
    font-size: 1.4rem;
    color: white;
    align-self: center;
  }

  .logo {
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .logo img {
    width: 100%;
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
    width: 100%;
    justify-content: center;
    display: flex;
  }
  .rightImg-cont-mobile{
      display: none;
      align-self: center;
      width: 50%;
      margin-top: 1rem;
    }

  .rightImg {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1100px) {
    .App {
      flex-direction: column;
      height: 100%;
      width: 100vw;
    }

    .logo {
      top: 0;
      right: 10px;
    }

    .App-right {
      /* height: 30vh; */
      width: 100%;
    }

    .rightImg-cont {
      /* height: 80%; */
      width: 45%;
      align-self: flex-end;
    }

    .App-left {
      width: 100%;
      padding: 15px;
      align-items: center;
    }

    .Websites-cont {
      margin: 20px 0;
    }

    h1 {
      font-size: 2.25rem;
    }

  }

  @media (max-width: 800px) {
    .App{
      justify-content: space-around;
    }
    .logo {
      left: 11px;
    top: 0px;
    width: 40%;
    }
    .App-header{
      display: none;
    }
    .App-header-mobile{
      display: block;
    }
    .App-header-mobile >h1{
      color: black;
      font-size: 1.5rem;
      letter-spacing: 0.01rem;
      margin-top: 4rem;
    }
    h1 {
      font-size: 1.2rem;
      
      text-align: center;
    }
    
    .rightImg-cont {
      display: none;
    }
    .rightImg-cont-mobile{
      display: block;
    }
    .App-left{
      background-color: white;
    }
    .Websites-cont{
      background-color: #EAEFF2;
    }
    .App-header > h1{
      color: black;
      font-size: 1.5rem;
      letter-spacing: 0.01rem;
    }
    .App-right {
      /* height: 25vh; */
    }
    .developer-mobile{
      font-size: 1rem;
      background-color: #211D70;
      padding-block: 0.5rem;
      color: white;
      text-align: center;
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
    }
    .developer {
      display: none;
    }
  }
</style>
