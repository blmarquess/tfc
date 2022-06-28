import { Request, Response, NextFunction } from 'express';
import UpdateMatchController from '../controllers/UpdateMatchController';

const UpdateMatchStatusFactory = (req: Request, res: Response, _next: NextFunction) =>
  new UpdateMatchController(req, res).finish();

const UpdateMatchScoreBoardFactory = (req: Request, res: Response, _next: NextFunction) =>
  new UpdateMatchController(req, res).updateMatchGoalsStatus();

export { UpdateMatchStatusFactory, UpdateMatchScoreBoardFactory };
