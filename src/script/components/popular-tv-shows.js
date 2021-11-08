class PopularTvShows extends HTMLElement {
  constructor() {
    super();
  }

  set popularTvShows(tvShows) {
    this._tvShows = tvShows;
    this.render();
  }

  connectedCallback() {}

  render() {
    const popularTvShowsList = document.querySelector("#popularTvShowsList");
    const movieInfoPopup = document.querySelector("movie-info-popup");

    this._tvShows.forEach((tvShow) => {
      const movieCard = document.createElement("movie-card");
      movieCard.movie = tvShow;

      popularTvShowsList.appendChild(movieCard);
      movieCard.addEventListener("click", function () {
        movieInfoPopup.classList.add("d-flex");
        movieInfoPopup.classList.remove("d-none");

        movieInfoPopup.moviePopup = tvShow;
      });
    });
  }
}

customElements.define("popular-tv-shows", PopularTvShows);
