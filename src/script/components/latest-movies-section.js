import "../components/movie-card.js";

class LatestMoviesSection extends HTMLElement {
  constructor() {
    super();
  }

  set latestMovies(movies) {
    this._movies = movies;
    this.render();
  }

  connectedCallback() {}

  render() {
    const latestMovieList = document.querySelector("#latestMovieList");
    const movieInfoPopup = document.querySelector("movie-info-popup");

    this._movies.forEach((movie) => {
      const movieCard = document.createElement("movie-card");
      movieCard.movie = movie;

      latestMovieList.appendChild(movieCard);
      movieCard.addEventListener("click", function () {
        movieInfoPopup.classList.add("d-flex");
        movieInfoPopup.classList.remove("d-none");

        movieInfoPopup.moviePopup = movie;
      });
    });
  }
}

customElements.define("latest-movies-section", LatestMoviesSection);
