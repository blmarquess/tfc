import { Router } from 'express';
import LoginRouter from './loginRouter';
import TeamRouter from './teamRouter';

const router = Router();

router.get('/', (_req, res, _next) => res.status(200).json({ message: 'Hello World!' }));

router.use('/login', LoginRouter);

router.use('/teams', TeamRouter);

export default router;
