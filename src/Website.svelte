<script lang="ts">
  export let website: WebsiteType;
</script>

<a class="Website" href={website.link} target="_blank">
<a  class="website-cont">
    <div class="imageCont"><img src={website.icon} /></div>
    <div class="name">{website.name}</div>
  </a>
  </a>

<style>
  .Website {
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    padding: 2.4rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    width: 40%;
  }
  .website-cont{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.25rem;
    padding: 0;
  }
  img {
    width: 80%;
  }
  .btn {
    color: white;
    background-color: #290475;
    padding: 10px;
    border-radius: 5px;
  }
  .name{
    font-weight: 600;
    font-size: 1.3rem;
    padding-top: 1rem;
    letter-spacing: 0.05rem;
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

  @media (max-width: 800px) {
    a {
      font-size: 0.75rem;
    }
    .Website{
      margin: 1rem;
      box-shadow: 0px 1.67499px 5.02497px rgba(0, 0, 0, 0.2)
    }
  }
@media (max-width: 600px){
  .imageCont{
    width: 38%;
    /* align-self: center; */
    margin-left: 15px;
  }
  .name{
    font-size: 0.7rem;
  }
}

</style>
