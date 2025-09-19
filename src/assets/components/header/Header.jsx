import React from 'react'
const slides=[
  {
    id:1,
    image:"https://cdn.pixabay.com/photo/2022/11/11/14/27/cosmos-7585071_960_720.jpg",
    title:"First slide label",
    description:"Some representative placeholder content for the first slide."
  },
  {
    id:2,
    image:"https://cdn.pixabay.com/photo/2022/11/11/14/27/cosmos-7585071_960_720.jpg",
    title:"Second slide label",
    description:"Some representative placeholder content for the second slide."
  },
  {
    id:3,
    image:"https://cdn.pixabay.com/photo/2022/11/11/14/27/cosmos-7585071_960_720.jpg",
    title:"Third slide label",
    description:"Some representative placeholder content for the third slide."
}]
function Header() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">

  <div class="carousel-inner">

  
   {
    slides.map((slide)=> 
    <div class="carousel-item active">
      <img src={slide.image} class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{slide.title}</h5>
        <p>{slide.description}</p>
      </div>
    </div>
    
    )
   }
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Header