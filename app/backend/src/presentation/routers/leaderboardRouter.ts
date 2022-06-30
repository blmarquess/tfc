import { Router } from 'express';
import RouterAdapter from '../adapters/ExpressRouterAdapter';
import GetLeaderBoardHomeFactory from '../factories/LeaderBoardFactoryHome';
import GetLeaderBoardAwayFactory from '../factories/LeaderBoardFactoryAway';

const LeaderBoardRouter = Router();

LeaderBoardRouter.get('/home', RouterAdapter(GetLeaderBoardHomeFactory));

LeaderBoardRouter.get('/away', RouterAdapter(GetLeaderBoardAwayFactory));

export default LeaderBoardRouter;
