import "../components/hero-section.js";
import "../components/recommendation-section.js";
import "../components/latest-movies-section.js";
import "../components/top-rated-movies-section.js";
import "../components/mobile/hero-section.js";
import "../components/mobile/latest-movie.js";
import "../components/mobile/top-rated-movie.js";
import Film from "./film.js";

class Movies extends Film {
  constructor() {
    super();
  }

  async getRecommendationMovies() {
    try {
      const recommendationList = document.querySelector(
        "recommendation-section"
      );
      const moviesRecommendation =
        await this.moviesSource.getRecommendationMovies();

      const promises = moviesRecommendation.data.map(
        async (movieRecommendation) => {
          const movies = [];
          const movieRecommendationDetail =
            await this.moviesSource.getDetailMovies(
              movieRecommendation.imdb_id
            );

          const movieMoreDetail = await this.moviesSource.findMovieById(
            movieRecommendation.imdb_id
          );

          movies.push({
            ...movieRecommendation,
            ...movieRecommendationDetail,
            ...movieMoreDetail.movie_results[0],
          });

          return movies;
        }
      );

      const responses = await Promise.all(promises);
      const results = responses.reduce(
        (moviesRecommendation, movieRecommendationDetail) => [
          ...moviesRecommendation,
          ...movieRecommendationDetail,
        ],
        []
      );

      this.renderMovies(results, recommendationList, "recommendationMovies");
    } catch (err) {
      console.log(err);
    }
  }

  async getLatestMovies() {
    try {
      const latestMovieList = document.querySelector("latest-movies-section");
      const latestMovieListMobile = document.querySelector(
        "latest-movies-mobile"
      );

      const latestMovies = await this.moviesSource.getLatestMovies();

      const promises = latestMovies.data.map(async (latestMovie) => {
        const movies = [];
        const latestMovieDetail = await this.moviesSource.getDetailMovies(
          latestMovie.imdb_id
        );

        const latestMovieMoreDetail = await this.moviesSource.findMovieById(
          latestMovie.imdb_id
        );

        movies.push({
          ...latestMovie,
          ...latestMovieDetail,
          ...latestMovieMoreDetail.movie_results[0],
        });

        return movies;
      });

      const responses = await Promise.all(promises);
      const results = responses.reduce(
        (latestMovies, latestMovieDetail) => [
          ...latestMovies,
          ...latestMovieDetail,
        ],
        []
      );

      this.renderMovies(results, latestMovieList, "latestMovies");
      this.renderMovies(results, latestMovieListMobile, "latestMoviesMobile");
    } catch (err) {
      console.log(err);
    }
  }

  async getMovieForBackdrop() {
    try {
      const heroSection = document.querySelector("hero-section");
      const heroSectionMobile = document.querySelector("hero-section-mobile");

      const movieId = Math.floor(Math.random() * 25) + 1;
      const tvShowId = Math.floor(Math.random() * 5) + 1;
      const randomNumber = Math.floor(Math.random() * 2) + 1;

      let movieBackdrop = [];
      let movie = {};

      if (randomNumber == 2) {
        movieBackdrop = await this.moviesSource.getMovieForBackdrop(movieId);
      } else {
        movieBackdrop = await this.tvShowsSource.getTVShowsBackdrop(tvShowId);
      }

      const movieDetail = await this.moviesSource.findMovieById(
        movieBackdrop.imdb_id
      );

      const movieMoreDetail = await this.moviesSource.getDetailMovies(
        movieBackdrop.imdb_id
      );

      if (randomNumber == 2) {
        movie = {
          ...movieBackdrop,
          ...movieDetail.movie_results[0],
        };
      } else {
        movie = {
          ...movieBackdrop,
          ...movieDetail.tv_results[0],
        };
      }

      movie.Rated = movieMoreDetail.Rated;
      movie.Actors = movieMoreDetail.Actors;
      movie.Country = movieMoreDetail.Country;
      movie.Director = movieMoreDetail.Director;
      movie.Writer = movieMoreDetail.Writer;
      movie.Genre = movieMoreDetail.Genre;

      this.renderMovies(movie, heroSection, "movieBackdrop");
      this.renderMovies(movie, heroSectionMobile, "heroImage");
    } catch (err) {
      console.log(err);
    }
  }

  async getTopRatedMovies() {
    try {
      const topRatedMovieList = document.querySelector(
        "top-rated-movies-section"
      );

      const topRatedMovieListMobile = document.querySelector(
        "top-rated-movies-mobile"
      );

      const topRatedMovies = await this.moviesSource.getMovies();

      const promises = topRatedMovies.data.map(async (topRatedMovie) => {
        const movies = [];
        const topRatedMoviesDetail = await this.moviesSource.getDetailMovies(
          topRatedMovie.imdb_id
        );

        const topRatedMovieMoreDetail = await this.moviesSource.findMovieById(
          topRatedMovie.imdb_id
        );

        movies.push({
          ...topRatedMovie,
          ...topRatedMoviesDetail,
          ...topRatedMovieMoreDetail.movie_results[0],
        });

        return movies;
      });

      const responses = await Promise.all(promises);
      const results = responses.reduce(
        (topRatedMovies, topRatedMoviesDetail) => [
          ...topRatedMovies,
          ...topRatedMoviesDetail,
        ],
        []
      );

      const filteredResults = results.filter((result) => {
        return result.imdbRating >= 7.5;
      });

      this.renderMovies(filteredResults, topRatedMovieList, "topRatedMovies");
      this.renderMovies(
        filteredResults,
        topRatedMovieListMobile,
        "topRatedMoviesMobile"
      );
    } catch (err) {
      console.log(err);
    }
  }

  async searchMovies(keyword) {
    try {
      const searchResultEl = document.querySelector("search-result");
      if (keyword.length < 3 && keyword !== "") {
        searchResultEl.renderErrorMessage("Keyword anda terlalu sedikit");
      } else if (keyword === "") {
        searchResultEl.renderErrorMessage(
          "Anda belum memasukkan keyword pencarian"
        );
      } else {
        const searchResultMovies = await this.moviesSource.searchMovies(
          keyword
        );
        const searchResultTvShows = await this.moviesSource.searchTvShows(
          keyword
        );

        const movies = [
          ...searchResultMovies.data,
          ...searchResultTvShows.data,
        ];

        const promises = movies.map(async (movie) => {
          const resultMovies = [];
          const movieDetail = await this.moviesSource.getDetailMovies(
            movie.imdb_id
          );

          const movieMoreDetail = await this.moviesSource.findMovieById(
            movie.imdb_id
          );

          if (movieMoreDetail.movie_results.length < 1) {
            resultMovies.push({
              ...movie,
              ...movieDetail,
              ...movieMoreDetail.tv_results[0],
            });
          } else {
            resultMovies.push({
              ...movie,
              ...movieDetail,
              ...movieMoreDetail.movie_results[0],
            });
          }

          return resultMovies;
        });

        const responses = await Promise.all(promises);
        const results = responses.reduce(
          (movies, moviesDetail) => [...movies, ...moviesDetail],
          []
        );

        if (results.length < 1) {
          searchResultEl.renderErrorMessage("Movies tidak ditemukan");
        } else {
          this.renderMovies(results, searchResultEl, "resultMovies");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default Movies;
