import image from "../../assets/images/not found.png";

class MovieCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {}

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  set clickEvent(event) {
    this._click = event;
  }

  render() {
    const {
      title,
      cover_url: coverUrl,
      release_date: releaseDate,
      imdbRating,
      Rated: rated,
    } = this._movie;

    const year = String(releaseDate).split("-")[0];

    this.innerHTML = `
            <picture class="cover">
                <img src="${coverUrl || image} " alt="${title}">
            </picture>
            <div class="desc">
                <h4>${title}</h4>
                <p>${year === "null" ? "Cooming Soon" : year}</p>
            </div>
            <div class="info">
                <span class="rating"><i class="fas fa-star"></i>${
                  imdbRating || "0"
                }</span>
                <span class="rated">${rated || "Belum Ada"}</span>
            </div>
        `;

    this.addEventListener("click", this._click);
  }
}

customElements.define("movie-card", MovieCard);
