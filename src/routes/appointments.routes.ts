import { Router } from 'express';

const appointmentsRouter = Router();

appointmentsRouter.post('/', (request, response) => {
  response.json({ message: 'hello woed' });
});

export default appointmentsRouter;
