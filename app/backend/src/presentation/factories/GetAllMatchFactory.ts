import { Request, Response, NextFunction } from 'express';
import MatchesController from '../controllers/MatchesController';

const GetAllMatchFactory = (req: Request, res: Response, _next: NextFunction) =>
  new MatchesController(req, res).execute();

export default GetAllMatchFactory;
