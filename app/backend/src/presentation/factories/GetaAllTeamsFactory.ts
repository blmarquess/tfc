import { Request, Response, NextFunction } from 'express';
import TeamController from '../controllers/TeamController';

const GetAllTeamsFactory = (req: Request, res: Response, _next: NextFunction) =>
  new TeamController().getAllTeams(req, res);

export default GetAllTeamsFactory;
