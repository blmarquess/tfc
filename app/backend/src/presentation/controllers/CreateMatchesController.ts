import { Request, Response } from 'express';
import HttpRequestError from '../errors/HttpRequestError';
import StatusCodes from '../../utils/statusCodes';
import CreateMatchUseCase from '../../useCases/matchesUseCases/CreateMatchUseCase';
import { MatchEntity } from '../../entities/MatchEntity';

export default class CreateMatcher {
  private match: MatchEntity;
  private service: CreateMatchUseCase;
  constructor(public req: Request, public res: Response) {
    this.match = req.body;
    this.res = res;
    this.service = new CreateMatchUseCase(this.match);
  }

  private verifyMatch(): boolean {
    return this.match.homeTeam !== this.match.awayTeam;
  }

  async execute() {
    const isMatchInvalid = !this.verifyMatch();
    if (isMatchInvalid) {
      throw new HttpRequestError(
        'It is not possible to create a match with two equal teams',
        StatusCodes.UNAUTHORIZED,
      );
    }

    const createMatch = await this.service.execute();
    return this.res.status(StatusCodes.CREATED).json(createMatch);
  }
}
