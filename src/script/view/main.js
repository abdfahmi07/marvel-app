import Movies from "./movies";
import TvShows from "./tv-shows";
import { ScrollLatestMovie, ScrollTopRatedMovie } from "./scroll";

const main = () => {
  const movieInfoPopup = document.querySelector("movie-info-popup");
  const movieInfoPopupMobile = document.querySelector(
    "movie-info-popup-mobile"
  );
  const heroSection = document.querySelector("hero-section");
  const recommendationSection = document.querySelector(
    "recommendation-section"
  );
  const heroSectionMobile = document.querySelector("hero-section-mobile");

  const movies = new Movies();
  const tvShows = new TvShows();
  const latestScrollMovie = new ScrollLatestMovie();
  const topRatedScrollMovie = new ScrollTopRatedMovie();

  movies.getRecommendationMovies();
  movies.getLatestMovies();
  movies.getMovieForBackdrop();
  movies.getTopRatedMovies();
  tvShows.getPopularTvShows();

  heroSection.clickEvent = () => {
    movieInfoPopup.classList.add("d-flex");
    movieInfoPopup.classList.remove("d-none");
    movieInfoPopup.moviePopup = heroSection.movieBackdrop;
  };

  heroSectionMobile.clickEvent = () => {
    movieInfoPopupMobile.classList.add("d-flex");
    movieInfoPopupMobile.classList.remove("d-none");
    movieInfoPopupMobile.moviePopup = heroSectionMobile.heroImage;
  };

  movieInfoPopup.clickEvent = () => {
    document.body.style.overflow = "auto";
    movieInfoPopup.classList.add("d-none");
    movieInfoPopup.classList.remove("d-flex");
  };

  movieInfoPopupMobile.clickEvent = () => {
    document.body.style.overflow = "auto";
    movieInfoPopupMobile.classList.add("d-none");
    movieInfoPopupMobile.classList.remove("d-flex");
  };

  const latestMovieSliderBtnLeft = document.querySelector(
    "latest-movies-section slider-button .slider-previous"
  );
  const latestMovieSliderBtnRight = document.querySelector(
    "latest-movies-section slider-button .slider-next"
  );
  const topMovieSliderBtnLeft = document.querySelector(
    "top-rated-movies-section slider-button .slider-previous"
  );
  const topMovieSliderBtnRight = document.querySelector(
    "top-rated-movies-section slider-button .slider-next"
  );

  document.addEventListener("click", function (e) {
    if (
      e.target.parentElement.getAttribute("id") === "latestMovieSliderButton"
    ) {
      if (e.target.classList.contains("slider-next")) {
        latestMovieSliderBtnRight.addEventListener(
          "click",
          latestScrollMovie.sliderScrollRight()
        );
      } else {
        latestMovieSliderBtnLeft.addEventListener(
          "click",
          latestScrollMovie.sliderScrollLeft()
        );
      }
    } else if (
      e.target.parentElement.getAttribute("id") === "topMovieSliderButton"
    ) {
      if (e.target.classList.contains("slider-next")) {
        topMovieSliderBtnRight.addEventListener(
          "click",
          topRatedScrollMovie.sliderScrollRight()
        );
      } else {
        topMovieSliderBtnLeft.addEventListener(
          "click",
          topRatedScrollMovie.sliderScrollLeft()
        );
      }
    }
  });

  const searchInput = document.querySelector("navbar-top");
  const searchResult = document.querySelector(
    "search-result #searchResultWrapper"
  );

  const latestMovieSection = document.querySelector("latest-movies-section");
  const topRatedMovieSection = document.querySelector(
    "top-rated-movies-section"
  );
  const popularTvShowSection = document.querySelector("popular-tv-shows");
  const mainSection = document.querySelector("main");
  const topNavbar = document.querySelector("navbar-top .top-nav");

  const searchMoviesAndTvShows = (e) => {
    const keyword = searchInput.searchInputVal;
    if (e.keyCode === 13) {
      e.preventDefault();
      window.scrollTo(0, 0);
      if (searchResult.classList.contains("d-none")) {
        searchResult.classList.remove("d-none");
        searchResult.classList.add("d-flex");
        heroSection.classList.add("d-none");
        recommendationSection.classList.add("d-none");
        latestMovieSection.classList.add("d-none");
        topRatedMovieSection.classList.add("d-none");
        popularTvShowSection.classList.add("d-none");
        mainSection.style.height = "70rem";
        topNavbar.classList.add("nav-result");
      }
      movies.searchMovies(keyword);
    }
  };

  searchInput.clickEvent = searchMoviesAndTvShows;

  const searchWrapper = document.querySelector("search-result");

  const closeSearchResult = () => {
    if (searchResult.classList.contains("d-flex")) {
      searchResult.classList.add("d-none");
      searchResult.classList.remove("d-flex");
      heroSection.classList.remove("d-none");
      recommendationSection.classList.remove("d-none");
      latestMovieSection.classList.remove("d-none");
      topRatedMovieSection.classList.remove("d-none");
      popularTvShowSection.classList.remove("d-none");
      mainSection.style.height = "170rem";
      topNavbar.classList.remove("nav-result");
    }
  };

  searchWrapper.clickEvent = closeSearchResult;

  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    let heroTitle = document.querySelector(".recommendation-movies__title h2");
    let sticky = heroTitle.offsetTop;

    const isNavSticky = () => {
      if (window.pageYOffset >= sticky) {
        topNavbar.classList.add("sticky", "nav-scrolling");
      } else {
        topNavbar.classList.remove("sticky", "nav-scrolling");
      }
    };

    window.onscroll = function () {
      isNavSticky();
    };
  }

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    searchInput.addEventListener("click", function (e) {
      if (e.target.getAttribute("id") === "iconSearch") {
        console.log("sasa");
        const searchInputMobile = document.querySelector("#searchElement");
        searchInputMobile.style.display = "block";
      }
    });
  }
};

export default main;
