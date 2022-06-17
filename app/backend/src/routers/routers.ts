import { Router } from 'express';
import HttpRequestError from '@errors/HttpRequestError';
import LoginRouter from './loginRouter';

const router = Router();

router.get('/', (_req, res, _next) => res.status(200).json({ message: 'Hello World!' }));
router.get('/er', (_req, _res, _next) => {
  throw new HttpRequestError('este é um error');
});
router.use('/login', LoginRouter);

export default router;
