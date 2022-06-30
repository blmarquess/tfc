import { Router } from 'express';
import RouterAdapter from '../adapters/ExpressRouterAdapter';
import GetLeaderBoardHomeFactory from '../factories/LeaderBoardFactoryHome';
import GetLeaderBoardAwayFactory from '../factories/LeaderBoardFactoryAway';
import GetLeaderBoardFactory from '../factories/LeaderBoardFactory';

const LeaderBoardRouter = Router();

LeaderBoardRouter.get('/', RouterAdapter(GetLeaderBoardFactory));

LeaderBoardRouter.get('/home', RouterAdapter(GetLeaderBoardHomeFactory));

LeaderBoardRouter.get('/away', RouterAdapter(GetLeaderBoardAwayFactory));

export default LeaderBoardRouter;
