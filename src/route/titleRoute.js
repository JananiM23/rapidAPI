import { Router } from "express";
import titleController from "../controller/titleController.js";

const route = Router();
const title = new titleController();

route.get('/find', title.find);
route.get('/v2/find', title.v2TitleFind);
route.get('/get-videos', title.getVideos);

export default route;