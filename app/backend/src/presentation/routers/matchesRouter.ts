import { Router } from 'express';
import RouterAdapter from '../adapters/ExpressRouterAdapter';
import GetAllMatchFactory from '../factories/GetAllMatchFactory';
// import GetMatchesByParamFactory from '../factories/GetMatchesByParamFactory';

const MatchesRouter = Router();

MatchesRouter.get('/', RouterAdapter(GetAllMatchFactory));

// MatchesRouter.get('/', RouterAdapter(GetMatchesByParamFactory));

export default MatchesRouter;
