<script lang="ts">
  import websites from "./assets/portals.json";
  import Website from "./Website.svelte";
  import logoSrc from "./assets/img/BITS-logo.png";
  import imgSrc from "./assets/img/right.png";
  // import hostel from "./assets/img/hostel.png"
  // import leave from "./assets/img/leave.png"
  // import briefcase from "./assets/img/briefcase.png"
  // import syringe from "./assets/img/syringe.png"
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
      <h1>Student Welfare Division Services</h1>
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
  :global(body){
    height: auto;
  }

  .App-header-mobile{
    display: none;
  }

  :global(#app) {
    width: 100%;
    height: 100%;
    position: relative;
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
    font-size: 4rem;
    letter-spacing: 0.3rem;
  }
  .App {
    display: flex;
    width: 100vw;
    min-height: 100vh;
    position: relative;
  }

  .App-left {
    width: 60%;
    background-color: #290475;
    padding-inline: 6rem;
    padding-top: 6rem;
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
    justify-content: center;
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
      margin-top: 2rem;
    }

  .rightImg {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1400px) {
    .App-left{
      padding-inline: 3rem;
    }
  }

  @media (max-width: 1100px) {
    .App-left{
      padding-inline: 3rem;
    }
    .App-header>h1{
      font-size: 3rem;
    }
    .logo{
      width: 25%;
    }
  }
  

  @media (max-width: 860px) {
    .rightImg-cont {
      /* height: 80%; */
      width: 45%;
      align-self: flex-end;
    }
    .App{
      justify-content: space-around;
      flex-direction: column;
      height: auto;
      width: 100vw;
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
      margin-top: 6rem;
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
      margin-top: 4rem;
    }
    .App-left{
      background-color: white;
      padding-inline: 1rem;
      width: 100%;
      padding-top: 3rem;
    }
    .Websites-cont{
      background-color: #EAEFF2;
      margin-bottom: 5rem;
    }
    .App-header > h1{
      color: black;
      font-size: 1.5rem;
      letter-spacing: 0.01rem;
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
