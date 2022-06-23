import { Request, Response } from 'express';
import GetMatchesByParamsFromRepository
  from '../../useCases/matchesUseCases/GetMatchesByParamsFromRepository';
import GetAllMatchesFromRepository
  from '../../useCases/matchesUseCases/getAllMatchesFromRepository';
import StatusCodes from '../../utils/statusCodes';

export default class MatchesController {
  private serviceMatch;
  private serviceMatchesFiltered;
  constructor(private HttpRequest: Request, private response: Response) {
    this.HttpRequest = HttpRequest;
    this.response = response;
    this.serviceMatch = new GetAllMatchesFromRepository();
    this.serviceMatchesFiltered = new GetMatchesByParamsFromRepository();
  }

  async getAllMatches() {
    const allMatches = await this.serviceMatch.execute();
    return this.response.status(StatusCodes.OK).json(allMatches);
  }

  async getMatchesByParam(param: boolean) {
    const matchesInProgress = await this.serviceMatchesFiltered.execute(param);
    return this.response.status(StatusCodes.OK).json(matchesInProgress);
  }

  async execute() {
    const { inProgress } = this.HttpRequest.query;
    if (inProgress) {
      return this.getMatchesByParam(inProgress === 'true');
    } return this.getAllMatches();
  }
}
