import { Router } from 'express';
import LeaderBoardRepository
  from '../../useCases/repositories/implementations/LeaderBoardRepository';

const LeaderBoardRouter = Router();

LeaderBoardRouter.get('/', (req, res) => {
  res.send('Hello World!');
});

LeaderBoardRouter.get('/home', async (req, res, next) => {
  try {
    console.log('chegamos aqui');
    const repo = new LeaderBoardRepository();
    // const homeTeam = await repo.getHomeTeam();
    const matches = await repo.getLeaderBoard();
    res.status(200).json(matches);
  } catch (error) {
    next(error);
  }
});

export default LeaderBoardRouter;
