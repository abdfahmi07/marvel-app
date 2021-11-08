class RecommendationCard extends HTMLElement {
  constructor() {
    super();
  }

  set recommendationMovie(movie) {
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
      Rated: rated,
      imdbRating,
    } = this._movie;

    this.innerHTML = `
        <div class="card">
            <img class="movie-cover" src="${coverUrl}">
            <div class="movie-info">
                <span class="rating"><i class="fas fa-star"></i>${imdbRating}</span>
                <span class="title">${title}</span>
                <span class="rated">${rated}</span>
            </div>
        </div>
    `;

    this.addEventListener("click", this._click);
  }
}

customElements.define("recommendation-card", RecommendationCard);
