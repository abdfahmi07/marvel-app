class NavbarBottom extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const currentUrl = document.URL.split("#")[1];

    this.innerHTML = `
            <div class="navbar-bottom">
                <div class="list-menu">
                    <div class="item">
                        <a href="index.html">
                            <button class="${
                              currentUrl ? "" : "active"
                            }"><i class="fas fa-home"></i></button>
                        </a>
                        <span>Home</span>
                    </div>
                    <div class="item">
                        <a href="#latestMoviesWrapperMobile">
                            <button class="${
                              currentUrl === "latestMoviesWrapperMobile"
                                ? "active"
                                : ""
                            }""><i class="fas fa-film"></i></button>
                        </a>
                        <span>Movies</span>
                    </div>
                    <div class="item">
                        <a href="#tvShowsWrapperMobile">
                            <button class="${
                              currentUrl === "tvShowsWrapperMobile"
                                ? "active"
                                : ""
                            }""><i class="fas fa-tv"></i></button>
                        </a>
                        <span>TV Shows</span>
                    </div>
                </div>
            </div>
        `;
  }
}

customElements.define("navbar-bottom", NavbarBottom);
