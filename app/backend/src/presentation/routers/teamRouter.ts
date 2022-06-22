import { Router } from 'express';
import RouterAdapter from '../adapters/ExpressRouterAdapter';
import GetAllTeamsFactory from '../factories/GetaAllTeamsFactory';
import GetTeamFactory from '../factories/GetTeamFactory';

const TeamRouter = Router();

TeamRouter.get('/', RouterAdapter(GetAllTeamsFactory));

TeamRouter.get('/:id', RouterAdapter(GetTeamFactory));

export default TeamRouter;
