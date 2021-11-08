class MovieInfoPopup extends HTMLElement {
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
                    <header class="popup-header">
                        <h2>${title}</h2>
                        <a href="${trailerUrl}" class="cta-button ${
      trailerUrl ? "" : "disabled"
    }" target="_blank"><button class="watch__trailer "><i class="far fa-play-circle"></i>Watch Trailer</button></a>
                    </header>
                    <img src="https://image.tmdb.org/t/p/original/${backdropPath}">
                    <div class="close-popup">
                      <span></span>
                      <span></span>
                    </div>
                </picture>
                <div class="popup-body">
                  ${
                    year !== "null"
                      ? `<div class="movie-info">
                          <div class="desc">
                              <h4>${rated}</h4>
                              <h4>${year}</h4>
                              <h4>${genre}</h4>
                          </div>
                          <p> ${overview}</p>
                          </div>
                          <div class="cast">
                              <p>Cast: <span>${cast}</span></p>
                              <p>Director: <span>${director}</span></p>
                              <p>Writer: <span>${writer}</span></p>
                              <p>Country: <span>${country}</span></p>
                          </div>
     `
                      : `<h3 class="coming-soon">Coming Soon</h3>
                         <p class="no-info"> No Movie Info Yet </p>`
                  }
            </div>
            </div>
            <div class="popup-overlay"></div>
        `;
    document.body.style.overflow = "hidden";
    this.querySelector(".popup-wrapper .close-popup").addEventListener(
      "click",
      this._click
    );
  }
}

customElements.define("movie-info-popup", MovieInfoPopup);
