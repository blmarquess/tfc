import { Request, Response, NextFunction } from 'express';
import GetMatchesController from '../controllers/GetMatchesController';

const GetAllMatchFactory = (req: Request, res: Response, _next: NextFunction) =>
  new GetMatchesController(req, res).execute();

export default GetAllMatchFactory;
