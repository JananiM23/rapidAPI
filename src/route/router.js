import { Router } from 'express';
import res from './res.router.js';
import actors from './actorsRouter.js';
import title from './titleRoute.js';


const router = Router();
const defaultRoute = [
    {
        path: "/app",
        route: res
    },
    {
        path: "/actors",
        route: actors
    },
    {
        path: "/title", 
        route: title
    }
]

defaultRoute.forEach((route) => {
    router.use(route.path, route.route);
})

export default router;
