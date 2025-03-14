import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faEnvelope,
  faImage,
  faDownload,
  faHorse,
  faPenNib,
  faClipboard,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faYoutube,
  faSpotify,
  faLinkedin,
  faGitlab,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faRocket,
  faHorse,
  faEnvelope,
  faPenNib,
  faImage,
  faDownload,
  faInstagram,
  faGitlab,
  faGithub,
  faYoutube,
  faSpotify,
  faLinkedin,
  faClipboard,
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
