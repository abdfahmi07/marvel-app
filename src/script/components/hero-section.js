class HeroSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {}

  get movieBackdrop() {
    return this._movie;
  }

  set movieBackdrop(movie) {
    this._movie = movie;
    this.render();
  }

  set clickEvent(event) {
    this._click = event;
  }

  render() {
    const {
      backdrop_path: backdropPath,
      title,
      overview,
      trailer_url: trailerUrl,
      Rated: rated,
    } = this._movie;

    let maxLength = 250;
    let overviewSummary = overview.substr(0, maxLength);

    this.innerHTML = `
    <div id="heroWrapper" class="hero container">
        <picture class="hero-image">
            <img src="https://image.tmdb.org/t/p/original/${backdropPath}" alt="${title}">
        </picture>
        <div class="hero-description">
            <h1>${title}</h1>
            <p>${overviewSummary}...</p>
        </div>
        <div class="cta-button">
            <a href="${trailerUrl}" target="_blank"><button class="watch__trailer"><i class="far fa-play-circle"></i>Watch Trailer</button></a>
            <button id="moreInfo" class="more__info"><i class="fas fa-info-circle"></i>More Info</button>
        </div>
        <div class="movie-rated">
          <h2>${rated}</h2>
        </div>
    </div>
        `;

    this.querySelector("#moreInfo").addEventListener("click", this._click);
  }
}

customElements.define("hero-section", HeroSection);
