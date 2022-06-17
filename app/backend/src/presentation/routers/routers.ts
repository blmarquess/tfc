import { Router } from 'express';
import LoginRouter from './loginRouter';

const router = Router();

router.get('/', (_req, res, _next) => res.status(200).json({ message: 'Hello World!' }));

router.use('/login', LoginRouter);

export default router;
