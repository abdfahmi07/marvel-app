class ScrollLatestMovie {
  constructor() {
    this.scrollPerClick = 400;
    this.scrollAmount = 20;
    this.slider = document.querySelector("#latestMovieList");
  }

  sliderScrollLeft() {
    this.slider.scrollTo({
      top: 0,
      left: (this.scrollAmount -= this.scrollPerClick),
      behavior: "smooth",
    });

    if (this.scrollAmount < 0) {
      this.scrollAmount = 0;
    }
  }

  sliderScrollRight() {
    if (
      this.scrollAmount <=
      this.slider.scrollWidth - this.slider.clientWidth
    ) {
      this.slider.scrollTo({
        top: 0,
        left: (this.scrollAmount += this.scrollPerClick),
        behavior: "smooth",
      });
    }
  }
}

class ScrollTopRatedMovie {
  constructor() {
    this.scrollPerClick = 400;
    this.scrollAmount = 20;
    this.slider = document.querySelector("#topRatedMovieList");
  }

  sliderScrollLeft() {
    this.slider.scrollTo({
      top: 0,
      left: (this.scrollAmount -= this.scrollPerClick),
      behavior: "smooth",
    });

    if (this.scrollAmount < 0) {
      this.scrollAmount = 0;
    }
  }

  sliderScrollRight() {
    if (
      this.scrollAmount <=
      this.slider.scrollWidth - this.slider.clientWidth
    ) {
      this.slider.scrollTo({
        top: 0,
        left: (this.scrollAmount += this.scrollPerClick),
        behavior: "smooth",
      });
    }
  }
}

export { ScrollLatestMovie, ScrollTopRatedMovie };
