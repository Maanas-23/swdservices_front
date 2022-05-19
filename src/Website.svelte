<script lang="ts">
  export let website: WebsiteType;
  export let websiteTransform: number;
  export let cl: string;
  let src = `./img/${website.img}`;
</script>

<div class="Website {cl}">
  {#key website.name}
    <a href="{website.link}" target="_blank"
      ><div class="card" style="{`--order: ${websiteTransform}`}">
        <img src="{src}" alt="{`${website.name} Image`}" />
      </div></a>
  {/key}
</div>

<style>
  .Website .card {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: blue;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    transform: translateX(calc(var(--order) * 100%));
    transition: all ease-in-out 500ms;
    padding: 0;
    overflow: hidden;
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .curr .card {
    transform: translateX(0);
  }
</style>
