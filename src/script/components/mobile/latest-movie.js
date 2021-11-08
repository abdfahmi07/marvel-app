class LatestMoviesMobile extends HTMLElement {
  constructor() {
    super();
  }

  set latestMoviesMobile(movies) {
    this._movies = movies;
    this.render();
  }

  connectedCallback() {}

  render() {
    this.innerHTML = `
            <div id="latestMoviesWrapperMobile" class="latest-movies-wrapper wrapper">
                <header class="latest-movies-header header">
                    <h3>Latest Movies</h3>
                    <hr />
                </header>
                <div id="latestMoviesListMobile" class="latest-movies-container list-container">
                </div>
            </div>
        `;
    const latestMovieList = document.querySelector("#latestMoviesListMobile");

    const movieInfoPopup = document.querySelector("movie-info-popup-mobile");

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

customElements.define("latest-movies-mobile", LatestMoviesMobile);
