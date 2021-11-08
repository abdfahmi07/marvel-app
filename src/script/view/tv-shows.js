import "../components/mobile/tv-shows.js";
import "../components/popular-tv-shows.js";
import Film from "./film.js";

class TvShows extends Film {
  constructor() {
    super();
  }

  async getPopularTvShows() {
    try {
      const popularTvShowsEl = document.querySelector("popular-tv-shows");
      const popularTvShowsMobile = document.querySelector("tv-shows-mobile");

      const popularTvShows = await this.tvShowsSource.getPopularTvShows();

      const promises = popularTvShows.data.map(async (popularTvShow) => {
        const tvShows = [];
        const popularTvShowDetail = await this.moviesSource.getDetailMovies(
          popularTvShow.imdb_id
        );

        const popularTvShowMoreDetail = await this.moviesSource.findMovieById(
          popularTvShow.imdb_id
        );

        tvShows.push({
          ...popularTvShow,
          ...popularTvShowDetail,
          ...popularTvShowMoreDetail.tv_results[0],
        });

        return tvShows;
      });

      const responses = await Promise.all(promises);
      const results = responses.reduce(
        (popularTvShows, popularTvShowsDetail) => [
          ...popularTvShows,
          ...popularTvShowsDetail,
        ],
        []
      );

      const filteredResults = results.filter((result) => {
        return result.imdbRating >= 7.3;
      });

      this.renderMovies(filteredResults, popularTvShowsEl, "popularTvShows");
      this.renderMovies(filteredResults, popularTvShowsMobile, "TvShowsMobile");
    } catch (err) {
      console.log(err);
    }
  }
}

export default TvShows;
