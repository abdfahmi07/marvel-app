class HeroSectionMobile extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {}

  get heroImage() {
    return this._heroImage;
  }

  set heroImage(movies) {
    this._heroImage = movies;
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
    } = this._heroImage;

    let maxLength = 250;
    let overviewSummary = overview.substr(0, maxLength);

    this.innerHTML = `
            <div class="hero-wrapper">
                <picture>
                    <img src="https://image.tmdb.org/t/p/original${backdropPath}" class="hero-image">
                    <div class="cta-btn">
                        <a href="${trailerUrl}" target="_blank"><button><i class="far fa-play-circle"></i></button></a>
                        <button class="detail-movie"><i class="fas fa-info-circle"></i></button></a>
                    </div>
                </picture>
                <div class="hero-description ">
                    <h1>${title}</h1>
                    <p> ${overviewSummary}...
                    </p>
                </div>
            </div>
        `;

    this.querySelector(".detail-movie").addEventListener("click", this._click);
  }
}

customElements.define("hero-section-mobile", HeroSectionMobile);
