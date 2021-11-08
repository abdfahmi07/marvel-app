import playingIcon from "../../../assets/images/play_circle_outline.png";
import comingSoonImg from "../../../assets/images/coming-soon-label-2.png";

class MovieInfoPopupMobile extends HTMLElement {
  constructor() {
    super();
  }

  set moviePopup(movie) {
    this._moviePopup = movie;
    this.render();
  }

  set clickEvent(event) {
    this._click = event;
  }

  connectedCallback() {}

  render() {
    const {
      backdrop_path: backdropPath,
      title,
      overview,
      trailer_url: trailerUrl,
      release_date: releaseDate,
      Rated: rated,
      Genre: genre,
      Actors: cast,
      Writer: writer,
      Director: director,
      Country: country,
    } = this._moviePopup;

    const year = String(releaseDate).split("-")[0];

    this.innerHTML = `
    <div class="popup-wrapper">
          <picture>
            <div class="popup-image">
                <img src="https://image.tmdb.org/t/p/original/${backdropPath}">
                <a href="${trailerUrl}" target="_blank"><img src="${
      trailerUrl ? playingIcon : comingSoonImg
    }"></a>
            </div>
            <div class="close-popup">
                <span></span>
                <span></span>
            </div>
          </picture>
          <div class="popup-body">
            <h2 class="movie-title">${title} (${
      year !== "null" ? year : "Coming Soon"
    })</h2>
    ${
      year !== "null"
        ? `
            <div class="movie-detail">
                <div class="info">
                    <h4>${rated}</h4>
                    <h4>${genre}</h4>
                </div>
                <p class="overview">${overview}</p>
                <div class="cast">
                    <p>Cast: <span>${cast}</span></p>
                    <p>Director: <span>${director}</span></p>
                    <p>Writer: <span>${writer}</span></p>
                    <p>Country: <span>${country}</span></p>
                </div>
            </div>`
        : `<img class="coming-soon" src="${comingSoonImg}">`
    }
          </div>
    </div>
    <div class="popup-overlay"></div>
    `;

    document.body.style.overflow = "hidden";
    this.querySelector(".popup-wrapper picture .close-popup").addEventListener(
      "click",
      this._click
    );
  }
}

customElements.define("movie-info-popup-mobile", MovieInfoPopupMobile);
