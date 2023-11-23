import { Router } from "express";
import controller from "../controller/controller.js";

const route = Router();
const Controller = new controller();

route.get('/auto', Controller.app);
route.get('/auto-complete', Controller.findAll);

export default route;
