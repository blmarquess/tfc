import { Request, Response } from 'express';
import LeaderBoardController from '../controllers/LeaderBoardController';

const GetLeaderBoardFactory = (req: Request, res: Response) =>
  new LeaderBoardController().GetAllLeaderBoard(req, res);

export default GetLeaderBoardFactory;
