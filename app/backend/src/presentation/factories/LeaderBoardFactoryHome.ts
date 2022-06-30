import { Request, Response } from 'express';
import LeaderBoardController from '../controllers/LeaderBoardController';

const GetLeaderBoardHomeFactory = (req: Request, res: Response) =>
  new LeaderBoardController().GetLeaderBoardForHome(req, res);

export default GetLeaderBoardHomeFactory;
