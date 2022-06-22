import { Request, Response, NextFunction } from 'express';
import TeamController from '../controllers/TeamController';

const GetTeamFactory = (req: Request, res: Response, _next: NextFunction) =>
  new TeamController().getTeamById(req, res);

export default GetTeamFactory;
