<script lang="ts">
  import websites from "./assets/portals.json";
  import Website from "./Website.svelte";
  import Logo from "./assets/img/DVM-Logo.svg";
  let curr: number = 0;
  let currWebsite: WebsiteType = websites[curr];

  function autoUpdate() {
    setTimeout(() => {
      setCurr(curr + 1);
      autoUpdate();
    }, 4000);
  }

  function setCurr(newCurr: number) {
    curr = newCurr;
    if (curr < 0) {
      curr = websites.length - 1;
    }
    if (curr >= websites.length) {
      curr = 0;
    }
    currWebsite = websites[curr];
  }
</script>

<div class="App">
  <h1 class="App-header">
    <img src="{Logo}" alt="DVM Logo" class="logo" />
    <div class="text">Department of <br />Visual Media Portals</div>
  </h1>
  <!-- <Website website="{website}" /> -->

  <div class="website-cont">
    <button on:click="{() => setCurr(curr - 1)}" class="btn prev-btn"
      ><svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 330.002 330.002"
        style="enable-background:new 0 0 330.002 330.002;"
        xml:space="preserve">
        <path
          id="XMLID_227_"
          d="M233.25,306.001L127.5,165.005L233.25,24.001c4.971-6.628,3.627-16.03-3-21c-6.627-4.971-16.03-3.626-21,3
	L96.75,156.005c-4,5.333-4,12.667,0,18l112.5,149.996c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001
	C236.878,322.03,238.221,312.628,233.25,306.001z"></path>
      </svg>
    </button>
    <div class="card-cont">
      <!-- <Website website="{prevWebsite}" cl="prev" />
      <Website website="{currWebsite}" cl="curr" />
      <Website website="{nextWebsite}" cl="next" /> -->
      {#each websites as website (websites.indexOf(website))}
        <Website
          website="{website}"
          websiteTransform="{websites.indexOf(website) - curr}"
          cl="{website === currWebsite ? 'curr' : ''}" />
      {/each}
    </div>
    <button on:click="{() => setCurr(curr + 1)}" class="btn next-btn">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 330 330"
        style="enable-background:new 0 0 330 330;"
        xml:space="preserve">
        <path
          id="XMLID_222_"
          d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"></path>
      </svg>
    </button>

    <a href="{currWebsite.link}" class="curr-link" target="_blank"
      ><strong>{currWebsite.name}</strong><br />Created: {currWebsite.date}</a>
  </div>
  <div class="shift-cont">
    {#each websites as website (websites.indexOf(website))}
      <div
        class="{websites.indexOf(website) === curr ? 'dot curr-dot' : 'dot'}"
        on:click="{() => {
          setCurr(websites.indexOf(website));
        }}">
      </div>
    {/each}
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap");
  .App-header {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 3.75rem;
    font-weight: 400;
    letter-spacing: 0.12ch;
  }

  .logo {
    height: 150px;
    width: auto;
  }

  .website-cont {
    width: 100vw;
    display: flex;
    flex-direction: row;
    padding: 0;
  }

  .curr-link {
    align-self: center;
    justify-self: center;
    text-decoration: none;
    color: white;
    margin-left: 50px;
    font-size: 2.5rem;
    font-weight: 300;
  }

  .btn {
    width: max-content;
    background: none;
    border: none;
    outline: none;
    align-self: center;
  }

  .btn svg {
    height: 30px;
    width: auto;
    stroke: white;
    fill: white;
    transition: all 200ms ease-in-out;
  }

  .next-btn svg:hover {
    transform: translateX(2px);
  }

  .prev-btn svg:hover {
    transform: translateX(-2px);
  }

  .card-cont {
    position: relative;
    margin: 20px 10px;
    width: 60vw;
    height: 60vh;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
  }

  .shift-cont {
    display: flex;
    box-sizing: border-box;
    width: 65vw;
    margin: 20px 0;
    padding: 0 20% 0 30%;
    flex-direction: row;
    justify-content: space-around;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
  }

  .curr-dot {
    transform: scale(2);
  }

  :global(body) {
    /* background-color: black; */
    background-color: #485461;
    background-image: linear-gradient(315deg, #28313b 0%, #000000 74%);
    padding: 0 30px;
    margin: 0;
    overflow: hidden;
    font-family: "Lato", sans-serif;
  }

  :global(:root) {
    padding: 0;
    margin: 0;
    height: 100vh;
  }
</style>
