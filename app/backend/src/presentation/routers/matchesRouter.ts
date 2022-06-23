import { Router } from 'express';
import RouterAdapter from '../adapters/ExpressRouterAdapter';
import GetAllMatchFactory from '../factories/GetAllMatchFactory';

const MatchesRouter = Router();

MatchesRouter.get('/', RouterAdapter(GetAllMatchFactory));

export default MatchesRouter;
