import { Router } from 'express';
import CreateMatchUseCase from '../../useCases/matchesUseCases/CreateMatchUseCase';
import RouterAdapter from '../adapters/ExpressRouterAdapter';
import GetAllMatchFactory from '../factories/GetAllMatchFactory';

const MatchesRouter = Router();

MatchesRouter.get('/', RouterAdapter(GetAllMatchFactory));

MatchesRouter.post('/', async (req, res, _next) => {
  const newMatch = req.body;
  const createMatch = await new CreateMatchUseCase(newMatch).execute();
  return res.status(201).json(createMatch);
});

export default MatchesRouter;
