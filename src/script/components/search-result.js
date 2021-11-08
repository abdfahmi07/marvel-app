class SearchResult extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._movies = [];
    this.render();
  }

  set clickEvent(event) {
    this._click = event;
  }

  set resultMovies(movies) {
    this._movies = movies;
    this.render();
  }

  get searchResultWrapper() {
    return this.querySelector("#searchResultWrapper");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ["class"];
  }

  renderErrorMessage(message) {
    this.querySelector("#searchResultWrapper").innerHTML = `
      <header class="search-result__header d-flex jc-fe">
          <div class="close-popup">
            <span></span>
            <span></span>
          </div>
      </header>
      <h3 class="error-message">${message}</h3>
    `;

    this.querySelector(".search-result__header .close-popup").addEventListener(
      "click",
      this._click
    );
  }

  render() {
    this.querySelector("#searchResultWrapper").innerHTML = `
          <header class="search-result__header d-flex">
            <h2>Search Result:</h2>
            <div class="close-popup">
              <span></span>
              <span></span>
            </div>
          </header>
          <div id="searchResultContainer" class="search-result-container d-flex"></div>
        `;

    const movieInfoPopup = document.querySelector("movie-info-popup");
    const searchResultContainer = this.querySelector("#searchResultContainer");

    this._movies.forEach((movie) => {
      const movieCard = document.createElement("movie-card");
      movieCard.movie = movie;

      searchResultContainer.appendChild(movieCard);
      movieCard.addEventListener("click", function () {
        movieInfoPopup.classList.add("d-flex");
        movieInfoPopup.classList.remove("d-none");

        movieInfoPopup.moviePopup = movie;
      });
    });

    this.querySelector(".search-result__header .close-popup").addEventListener(
      "click",
      this._click
    );
  }
}

customElements.define("search-result", SearchResult);
