class TvShowsMobile extends HTMLElement {
  constructor() {
    super();
  }

  set TvShowsMobile(tvShows) {
    this._tvShows = tvShows;
    this.render();
  }

  connectedCallback() {}

  render() {
    this.innerHTML = `
              <div id="tvShowsWrapperMobile" class="tv-shows-wrapper wrapper">
                  <header class="tv-shows-header header">
                      <h3>Popular TV Shows</h3>
                      <hr />
                  </header>
                  <div id="tvShowsListMobile" class="tv-shows-container list-container">
                  </div>
              </div>
          `;
    const tvShowList = document.querySelector("#tvShowsListMobile");
    const movieInfoPopup = document.querySelector("movie-info-popup-mobile");

    this._tvShows.forEach((tvShows) => {
      const movieCard = document.createElement("movie-card");
      movieCard.movie = tvShows;

      tvShowList.appendChild(movieCard);
      movieCard.addEventListener("click", function () {
        movieInfoPopup.classList.add("d-flex");
        movieInfoPopup.classList.remove("d-none");

        movieInfoPopup.moviePopup = tvShows;
      });
    });
  }
}

customElements.define("tv-shows-mobile", TvShowsMobile);
