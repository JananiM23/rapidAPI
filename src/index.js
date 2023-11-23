import express from 'express';
import router from './route/router.js';

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`your port is listening on ${port}`);
});

app.use('/v1', router);