class TopRatedMoviesMobile extends HTMLElement {
  constructor() {
    super();
  }

  set topRatedMoviesMobile(movies) {
    this._movies = movies;
    this.render();
  }

  connectedCallback() {}

  render() {
    this.innerHTML = `
              <div id="topMoviesWrapperMobile" class="top-rated-movies-wrapper wrapper">
                  <header class="top-movies-header header">
                      <h3>Top Rated Movies</h3>
                      <hr />
                  </header>
                  <div id="topMoviesListMobile" class="top-rated-movies-container list-container">
                  </div>
              </div>
          `;
    const topMovieList = document.querySelector("#topMoviesListMobile");

    const movieInfoPopup = document.querySelector("movie-info-popup-mobile");

    this._movies.forEach((movie) => {
      const movieCard = document.createElement("movie-card");
      movieCard.movie = movie;

      topMovieList.appendChild(movieCard);
      movieCard.addEventListener("click", function () {
        movieInfoPopup.classList.add("d-flex");
        movieInfoPopup.classList.remove("d-none");

        movieInfoPopup.moviePopup = movie;
      });
    });
  }
}

customElements.define("top-rated-movies-mobile", TopRatedMoviesMobile);
