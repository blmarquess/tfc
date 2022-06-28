import { Router } from 'express';
import RouterAdapter from '../adapters/ExpressRouterAdapter';
import GetAllMatchFactory from '../factories/GetAllMatchFactory';
import CreateMatchFactory from '../factories/CreateMatchFactory';
import { UpdateMatchStatusFactory, UpdateMatchScoreBoardFactory }
  from '../factories/UpdateMatchFactory';

const MatchesRouter = Router();

MatchesRouter.get('/', RouterAdapter(GetAllMatchFactory));

MatchesRouter.post('/', RouterAdapter(CreateMatchFactory));

MatchesRouter.patch('/:id/finish', RouterAdapter(UpdateMatchStatusFactory));

MatchesRouter.patch('/:id', RouterAdapter(UpdateMatchScoreBoardFactory));

export default MatchesRouter;
