import { Request, Response } from 'express';
import LeaderBoardUseCase from '../../useCases/leaderBoardUseCases/LeaderBoardUseCase';
import StatusCodes from '../../utils/statusCodes';

export default class LeaderBoardController {
  constructor(private useCase = new LeaderBoardUseCase()) { }

  public async GetLeaderBoardForHome(_req: Request, res:Response) {
    const LeaderBoardHome = await this.useCase.getLeaderBoardHome();
    return res.status(StatusCodes.OK).json(LeaderBoardHome);
  }

  public async GetLeaderBoardForAway(_req: Request, res: Response) {
    const LeaderBoardAway = await this.useCase.getLeaderBoardAway();
    return res.status(StatusCodes.OK).json(LeaderBoardAway);
  }
}
