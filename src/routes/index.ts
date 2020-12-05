import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();
routes.use('/appointments', appointmentsRouter);

routes.get('/', (req, resp) => resp.json({ message: 'hello world!!' }));

export default routes;
