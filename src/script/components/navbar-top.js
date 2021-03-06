class NavbarTop extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._click = event;
    this.render();
  }

  get searchInputVal() {
    return this.querySelector("#searchElement").value;
  }

  get topNav() {
    return this.querySelector("nav .top-nav");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ["class"];
  }

  render() {
    const currentUrl = document.URL.split("#")[1];

    this.querySelector(".top-nav").innerHTML = `
            <a href="index.html">
                <svg width="113" height="30" viewBox="0 0 113 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.54053 1.27344L12.7773 21.3257L17.9951 1.27344H25.3076V29H19.6899V21.4971L20.2041 9.93799L14.6626 29H10.854L5.3125 9.93799L5.82666 21.4971V29H0.228027V1.27344H7.54053ZM39.4984 23.3252H31.8622L30.3769 29H24.4545L33.119 1.27344H38.2416L46.9633 29H40.9838L39.4984 23.3252ZM33.081 18.6597H38.2606L35.6708 8.77637L33.081 18.6597ZM54.0701 18.8691H51.2898V29H45.6912V1.27344H54.6224C57.428 1.27344 59.5926 2.00342 61.116 3.46338C62.6521 4.91064 63.4202 6.97363 63.4202 9.65234C63.4202 13.334 62.0809 15.9111 59.4021 17.3838L64.2581 28.7334V29H58.2405L54.0701 18.8691ZM51.2898 14.2036H54.47C55.5872 14.2036 56.4251 13.8354 56.9837 13.0991C57.5423 12.3501 57.8216 11.3535 57.8216 10.1094C57.8216 7.3291 56.7361 5.93896 54.5652 5.93896H51.2898V14.2036ZM75.0783 21.7256C75.0783 20.5957 74.7863 19.7451 74.2023 19.1738C73.6311 18.5898 72.5837 17.9868 71.0603 17.3647C68.28 16.311 66.2805 15.0796 65.0617 13.6704C63.843 12.2485 63.2336 10.5728 63.2336 8.64307C63.2336 6.30713 64.0588 4.43457 65.7092 3.02539C67.3723 1.60352 69.4797 0.892578 72.0314 0.892578C73.7326 0.892578 75.2497 1.25439 76.5827 1.97803C77.9157 2.68896 78.9377 3.69824 79.6486 5.00586C80.3723 6.31348 80.7341 7.79883 80.7341 9.46191H75.1545C75.1545 8.16699 74.8752 7.18311 74.3166 6.51025C73.7707 5.82471 72.9772 5.48193 71.9362 5.48193C70.9587 5.48193 70.197 5.77393 69.6511 6.35791C69.1052 6.9292 68.8322 7.70361 68.8322 8.68115C68.8322 9.44287 69.1369 10.1348 69.7463 10.7568C70.3557 11.3662 71.4348 12.001 72.9836 12.6611C75.6877 13.6387 77.6491 14.8384 78.8679 16.2603C80.0993 17.6821 80.715 19.4912 80.715 21.6875C80.715 24.0996 79.947 25.9849 78.4108 27.3433C76.8747 28.7017 74.7863 29.3809 72.1457 29.3809C70.3557 29.3809 68.7243 29.0127 67.2517 28.2764C65.779 27.54 64.6237 26.4863 63.7858 25.1152C62.9606 23.7441 62.548 22.1255 62.548 20.2593H68.1657C68.1657 21.8589 68.4768 23.0205 69.0988 23.7441C69.7209 24.4678 70.7365 24.8296 72.1457 24.8296C74.1008 24.8296 75.0783 23.7949 75.0783 21.7256ZM94.8487 17.0029H86.1271V24.3535H96.4483V29H80.5284V1.27344H96.4103V5.93896H86.1271V12.4897H94.8487V17.0029ZM102.359 24.3535H112.185V29H96.7606V1.27344H102.359V24.3535Z" fill="#EC1D24"/>
                </svg>
            </a>
            <ul class="isDesktop">
                <li><a href="index.html" class="${
                  currentUrl ? "" : "active"
                }">Home</a></li>
                <li><a href="#latestMoviesSlider" class="${
                  currentUrl === "latestMoviesSlider" ? "active" : ""
                }">Movies</a></li>
                <li><a href="#popularTvShowsSlider" class="${
                  currentUrl === "popularTvShowsSlider" ? "active" : ""
                }">TV Shows</a></li>
            </ul>
            <div class="search-input">
                <input id="searchElement" type="text" placeholder="Search" />
                <i id="iconSearch" class="fa fa-search" aria-hidden="true"></i>
            </div>
     
        `;

    this.querySelector("#searchElement").addEventListener("keyup", this._click);
  }
}

customElements.define("navbar-top", NavbarTop);
