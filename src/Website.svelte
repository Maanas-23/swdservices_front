<script lang="ts">
  export let website: WebsiteType;
</script>

<div class="Website">
  <a href={website.link} target="_blank">{website.name}</a>
  <a href={website.link} target="_blank" class="btn">Go Here</a>
</div>

<style>
  .Website {
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.25rem;
    padding: 0;
  }

  .btn {
    color: white;
    background-color: #290475;
    padding: 10px;
    border-radius: 5px;
  }

  @media (max-width: 1100px) {
    .Website {
      padding: 10px;
    }

    a {
      font-size: 1rem;
    }

    .btn {
      padding: 8px;
      margin-left: 50px;
    }
  }

  @media (max-width: 500px) {
    a {
      font-size: 0.75rem;
    }
  }
</style>
