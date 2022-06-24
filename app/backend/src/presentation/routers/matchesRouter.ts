import { Router } from 'express';
import RouterAdapter from '../adapters/ExpressRouterAdapter';
import GetAllMatchFactory from '../factories/GetAllMatchFactory';
import CreateMatchFactory from '../factories/CreateMatchFactory';

const MatchesRouter = Router();

MatchesRouter.get('/', RouterAdapter(GetAllMatchFactory));

MatchesRouter.post('/', RouterAdapter(CreateMatchFactory));

export default MatchesRouter;
