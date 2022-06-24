import { Request, Response, NextFunction } from 'express';
import CreateMatcher from '../controllers/CreateMatchesController';

const CreateMatchFactory = (req: Request, res: Response, _next: NextFunction) =>
  new CreateMatcher(req, res).execute();

export default CreateMatchFactory;
