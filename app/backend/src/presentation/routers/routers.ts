import { Router } from 'express';
import LeaderBoardRouter from './leaderboardRouter';
import LoginRouter from './loginRouter';
import MatchesRouter from './matchesRouter';
import TeamRouter from './teamRouter';

const router = Router();

router.get('/', (_req, res, _next) => res.status(200).json({ message: 'Hello World!' }));

router.use('/login', LoginRouter);

router.use('/teams', TeamRouter);

router.use('/matches', MatchesRouter);

router.use('/leaderboard', LeaderBoardRouter);

export default router;
