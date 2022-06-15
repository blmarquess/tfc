import { Router } from 'express';

const router = Router();

router.get('/', (_req, res, _next) => res.status(200).json({ message: 'Hello World!' }));

export default router;
