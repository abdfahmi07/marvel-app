// const dotenv = require("dotenv");
// dotenv.config();
import "./script/components/navbar-top.js";
import "./script/components/slider-button.js";
import "./script/components/movie-info-popup.js";
import "./script/components/search-result.js";
import "./script/components/mobile/navbar-bottom.js";
import "./script/components/mobile/movie-info-popup.js";
import "./styles/main.css";
import "./styles/responsive.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);
