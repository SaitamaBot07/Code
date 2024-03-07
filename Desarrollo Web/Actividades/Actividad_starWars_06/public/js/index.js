import IndexController from "./controller/IndexController";
import IndexModel from "./Model/IndexModel";
import IndexView from "./view/IndexView";
const indexController = new IndexController(new IndexModel(), new IndexView());
indexController.start();