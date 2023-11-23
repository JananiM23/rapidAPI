import { Router } from "express";
import actorsController from "../controller/actorsController.js";

const route = Router();
const actors = new actorsController();

route.get('/list-born-today', actors.bornToday);
route.get('/list-most-popular-celebs', actors.mostPopular);
route.get('/get-bio', actors.getBio);

export default route;