import { Router } from 'express';

const routes = Router();

routes.get('/', (req, resp) => resp.json({ message: 'hello world!!' }));

export default routes;