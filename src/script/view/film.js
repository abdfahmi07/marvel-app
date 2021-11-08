import TVShowsSource from "../data/tv-shows-source.js";
import MoviesSource from "../data/movies-source.js";

class Film {
  constructor() {
    this.moviesSource = new MoviesSource();
    this.tvShowsSource = new TVShowsSource();
  }

  renderMovies(movies, elementRender, elementSetter) {
    elementRender[elementSetter] = movies;
  }
}

export default Film;
