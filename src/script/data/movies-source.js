class MoviesSource {
  getMovies() {
    return fetch(`${process.env.API_BASE_URL}/movies`)
      .then((response) => {
        return response.json();
      })
      .then((movies) => {
        return movies;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getRecommendationMovies() {
    return fetch(
      `${process.env.API_BASE_URL}/movies?limit=3&order=release_date,DESC&page=6`
    )
      .then((response) => {
        return response.json();
      })
      .then((movies) => {
        return movies;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getDetailMovies(imdbId) {
    return fetch(
      `${process.env.API_BASE_URL2}/?i=${imdbId}&apikey=${process.env.API_KEY_OMDB}`
    )
      .then((response) => {
        return response.json();
      })
      .then((movieDetail) => {
        return movieDetail;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getLatestMovies() {
    return fetch(
      `${process.env.API_BASE_URL}/movies/?order=release_date,DESC&limit=12`
    )
      .then((response) => {
        return response.json();
      })
      .then((latestMovies) => {
        return latestMovies;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  findMovieById(imdbId) {
    return fetch(
      `${process.env.API_BASE_URL3}/find/${imdbId}?api_key=${process.env.API_KEY_TMDB}&external_source=imdb_id`
    )
      .then((response) => {
        return response.json();
      })
      .then((movieDetail) => {
        return movieDetail;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getMovieForBackdrop(movieId) {
    return fetch(`${process.env.API_BASE_URL}/movies/${movieId}`)
      .then((response) => {
        return response.json();
      })
      .then((movie) => {
        return movie;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  searchMovies(keyword) {
    return fetch(`${process.env.API_BASE_URL}/movies?filter=title=${keyword}`)
      .then((responses) => {
        return responses.json();
      })
      .then((movies) => {
        return movies;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  searchTvShows(keyword) {
    return fetch(`${process.env.API_BASE_URL}/tvshows?filter=title=${keyword}`)
      .then((responses) => {
        return responses.json();
      })
      .then((tvShows) => {
        return tvShows;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default MoviesSource;
