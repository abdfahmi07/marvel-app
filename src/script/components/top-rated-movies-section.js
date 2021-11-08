class TopRatedMoviesSection extends HTMLElement {
  constructor() {
    super();
  }

  set topRatedMovies(movies) {
    this._movies = movies;
    this.render();
  }

  connectedCallback() {}

  render() {
    const topRatedMovieList = document.querySelector("#topRatedMovieList");
    const movieInfoPopup = document.querySelector("movie-info-popup");

    this._movies.forEach((movie) => {
      const movieCard = document.createElement("movie-card");
      movieCard.movie = movie;

      topRatedMovieList.appendChild(movieCard);
      movieCard.addEventListener("click", function () {
        movieInfoPopup.classList.add("d-flex");
        movieInfoPopup.classList.remove("d-none");

        movieInfoPopup.moviePopup = movie;
      });
    });
  }
}

customElements.define("top-rated-movies-section", TopRatedMoviesSection);
