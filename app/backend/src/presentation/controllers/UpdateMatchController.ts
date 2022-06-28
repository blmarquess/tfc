import { Request, Response } from 'express';
import StatusCodes from '../../utils/statusCodes';
import UpdateMatchUseCases from '../../useCases/matchesUseCases/UpdateMatchUseCases';

export default class UpdateMatchController {
  private serviceUpdateMatch;
  constructor(
    private HttpRequest: Request,
    private response: Response,
  ) {
    this.HttpRequest = HttpRequest;
    this.response = response;
    this.serviceUpdateMatch = new UpdateMatchUseCases();
  }

  async finish() {
    const { id } = this.HttpRequest.params;
    const isValidId = Number.isInteger(Number(id));
    if (isValidId) {
      const finishMatch = await this.serviceUpdateMatch.updateMatchProgressStatus(Number(id));
      return this.response.status(StatusCodes.OK).json(finishMatch);
    } return this.response.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid id' });
  }

  async updateMatchGoalsStatus() {
    const { id } = this.HttpRequest.params;
    const { homeTeamGoals, awayTeamGoals } = this.HttpRequest.body;
    const isValidId = Number.isInteger(Number(id));
    if (isValidId) {
      const match = await this.serviceUpdateMatch
        .updateMatchGoalsStatus(Number(id), homeTeamGoals, awayTeamGoals);
      return this.response.status(StatusCodes.OK).json(match);
    } return this.response.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid id' });
  }
}
