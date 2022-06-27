import { getCookie, setCookie } from "./cookie";
import { themeController } from "./theme";
import responseRowController from "./response-row";
import * as bootstrap from "bootstrap";

/* Bootstrap */
window.bootstrap = bootstrap;

/* Theme */
themeController();

/* Cookie */
getCookie();
setCookie();

/* Response Row */
responseRowController();
