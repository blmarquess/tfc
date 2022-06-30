import { Request, Response } from 'express';
import LeaderBoardController from '../controllers/LeaderBoardController';

const GetLeaderBoardAwayFactory = (req: Request, res: Response) =>
  new LeaderBoardController().GetLeaderBoardForAway(req, res);

export default GetLeaderBoardAwayFactory;
