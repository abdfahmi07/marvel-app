import "./recommendation-card.js";

class RecommendationSection extends HTMLElement {
  constructor() {
    super();
  }

  set clickEvent(event) {
    this._click = event;
  }

  set recommendationMovies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    const recommendationList = document.querySelector(
      "recommendation-section .recommendation-list"
    );
    const movieInfoPopup = document.querySelector("movie-info-popup");

    this._movies.forEach((movie) => {
      const recommendationMovieCard = document.createElement(
        "recommendation-card"
      );
      recommendationMovieCard.recommendationMovie = movie;
      recommendationList.appendChild(recommendationMovieCard);
      recommendationMovieCard.addEventListener("click", function () {
        movieInfoPopup.classList.add("d-flex");
        movieInfoPopup.classList.remove("d-none");
        movieInfoPopup.moviePopup = movie;
      });
    });
  }
}

customElements.define("recommendation-section", RecommendationSection);
