import { axios } from "axios";
import { hideLoading, showLoading, transformDate } from "../utils";
const HomeScreen = {
  after_render: async () => {
    const trending_section = document.querySelector(".trending .container");

    const arrowRight = document.querySelector(".arrowRightBtn");
    let firstBox = trending_section.querySelectorAll(".box")[0];
    let firstBoxWidth = firstBox.clientWidth + 20;
    const showHideArrow = () => {
      let scrollWidth = trending_section.scrollWidth - trending_section.clientWidth; // max scroll width

      console.log(scrollWidth)
      arrowLeft.style.display = trending_section.scrollLeft == 0 ? "none" : "block";
      arrowRight.style.display = trending_section.scrollLeft == scrollWidth ? "none" : "block"
    }
    // Right arrow Move
    arrowRight.addEventListener("click", (e) => {
      e.preventDefault();
      trending_section.scrollLeft += firstBoxWidth;
      setTimeout(() => {
        showHideArrow()
      }, 60)


    })
    const arrowLeft = document.querySelector(".left");
    arrowLeft.addEventListener("click", (e) => {
      e.preventDefault();
      trending_section.scrollLeft -= firstBoxWidth;
      showHideArrow()

    })
  },
  render: async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    // Get all trending movies info
    showLoading();
    const response = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=688cd3e93675b6046cd154e9d6daf187', options);
    if (!response || !response.ok) {
      return `<div>Error in getting data</div>`
    }
    const movies = await response.json();
    hideLoading()
    console.log(movies)





    return `<section class="landing">
        <div class="container">
          <div class="landing-info">
            <h1>Welcome to Netflix clone</h1>
            <p>
              Nous sommes ravis de vous présenter notre plateforme de présentation
              de films et de séries Netflix en ligne. Avec notre site web, vous
              pouvez découvrir des milliers de titres...
            </p>
          </div>
          <div class="image">
            <img src="/imgs/landing-image.png" alt="" />
          </div>
        </div>
        <a href="#trending" class="go-down">
          <i class="fas fa-angle-double-down fa-2x"></i>
        </a>
      </section>
      
      <section id="trending" class="trending">
      <h2 class="main-title">Trending</h2>

      <div class="container"> 
      <i class="fa-solid fa-angle-left left" type="button"></i>

      ${movies.results.map(movie => {
      return `  
      <a class="box" href="/#/movie/${movie.id}">
      <img src="https://image.tmdb.org/t/p/w1280//${movie.backdrop_path}" alt="" />
  
      <div class="info">
      <h4>${movie.title ? movie.title : movie?.name}</h4>
        <span class="movie-date">${movie.release_date ? transformDate(movie.release_date).fulldate : transformDate(movie.first_air_date).fulldate}</span>
        <span class="rate">${movie.vote_average.toFixed(1)}</span>
      </div>
    </a>`
    }).join("")}
    <i class="fa-solid fa-angle-right arrowRightBtn right"></i>

      </div>

    </section>
      
      `
  }
}

export default HomeScreen;



