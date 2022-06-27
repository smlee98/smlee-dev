import { getCookie, setCookie } from "./cookie";
// import { searchHighlight } from "./search";
import { themeController } from "./theme";
import { navbarEventBinder } from "./navbar";
import { editorController } from "./editor";
import { selectItems } from "./selectItems";
import { datepickerController, timepickerController } from "./picker";
import { modalController, tooltipController } from "./bs-custom";
import responseRowController from "./response-row";
import * as bootstrap from "bootstrap";

/* Bootstrap */
window.bootstrap = bootstrap;
tooltipController();
modalController();

/* DatePicker, TimePicker */
datepickerController();
timepickerController();

/* Select2 Items */
selectItems();

/* Editor */
editorController();

/* Theme */
themeController();

/* Cookie */
getCookie();
setCookie();

/* Search */
// searchHighlight();

/* Navbar */
navbarEventBinder();

/* Response Row */
responseRowController();
