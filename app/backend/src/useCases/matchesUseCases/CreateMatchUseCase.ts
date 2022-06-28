import { MatchEntity } from '../../entities/MatchEntity';
import CreateMatchesRepository from '../repositories/implementations/CreateMatchesRepository';
import { ICreateMatchesRepository } from '../repositories/ICreateMatchesRepository';
import StatusCodes from '../../utils/statusCodes';
import HttpRequestError from '../../presentation/errors/HttpRequestError';

export default class CreateMatchUseCase {
  private repository: ICreateMatchesRepository;
  constructor(public match: MatchEntity) {
    this.repository = new CreateMatchesRepository();
    this.match = match;
  }

  async verifyMatch(): Promise<void> {
    const hasTeamInvalid = await this.repository
      .verifyIfExistTeams(this.match.awayTeam, this.match.homeTeam);
    if (hasTeamInvalid) {
      throw new HttpRequestError('There is no team with such id!', StatusCodes.NOT_FOUND);
    }
  }

  async execute() {
    await this.verifyMatch();
    const createMatch = await this.repository.execute({ ...this.match, inProgress: true });
    return createMatch;
  }
}
