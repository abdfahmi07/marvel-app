class TVShowsSource {
  getTVShowsBackdrop(tvShowsId) {
    return fetch(`${process.env.API_BASE_URL}/tvshows/${tvShowsId}`)
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

  getPopularTvShows() {
    return fetch(`${process.env.API_BASE_URL}/tvshows`)
      .then((response) => {
        return response.json();
      })
      .then((tvShow) => {
        return tvShow;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default TVShowsSource;
