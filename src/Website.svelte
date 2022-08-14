<script lang="ts">
  import "./assets/portals.json"
  import hostel from "./assets/img/hostel.png";
  import leave from "./assets/img/leave.png";
  import briefcase from "./assets/img/briefcase.png";
  import syringe from "./assets/img/syringe.png";
  export let website: WebsiteType;
  let imgSrc=hostel;
  switch (website.icon) {
    case 1:
      imgSrc=hostel
      break;
   case 2:
      imgSrc=leave
      break;
   case 3:
      imgSrc=syringe
      break;
   case 4:
      imgSrc=hostel
      break;
    default:
      break;
  }
</script>

<a class="Website" href={website.link} target="_blank">
<a  class="website-cont" href={website.link} target="_blank">
    <div class="imageCont"><img src={imgSrc} class="webImage" alt="imageHere"/></div>
    <div class="name">{website.name}</div>
  </a>
  </a>

<style>
  .Website {
    background-color: white;
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
 
  .imageCont{
    display: flex;
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
  .name{
    font-weight: 600;
    font-size: 1.3rem;
    padding-top: 1rem;
    letter-spacing: 0.05rem;
  }
  .webImage{
    width: 35px;
  }

  
  @media (max-width: 1300px) {
    .Website {
      padding: 16px 10px;
      margin: 1.3rem;
    }

    a {
      font-size: 1rem;
    }

  }
  @media (max-width: 380px){
    .Website{
      margin: 0.5rem !important;
    }
  }

  @media (max-width: 860px) {
    a {
      font-size: 0.75rem;
    }
    .Website{
      margin: 1rem;
      box-shadow: 0px 1.67499px 5.02497px rgba(0, 0, 0, 0.2)
    }
    .webImage{
    width: 25px;
  }
  }
@media (max-width: 600px){
  .imageCont{
    width: 38%;
    /* align-self: center; */
  }
  .name{
    font-size: 0.7rem;
  }
}

</style>
