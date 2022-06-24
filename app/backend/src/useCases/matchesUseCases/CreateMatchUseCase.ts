import HttpRequestError from '../../presentation/errors/HttpRequestError';
import { MatchEntity } from '../../entities/MatchEntity';
import CreateMatchesRepository from '../repositories/implementations/CreateMatchesRepository';
import { ICreateMatchesRepository } from '../repositories/ICreateMatchesRepository';

export default class CreateMatchUseCase {
  private repository: ICreateMatchesRepository;
  constructor(public match: MatchEntity) {
    this.repository = new CreateMatchesRepository();
    this.match = match;
  }

  private verifyMatch(): boolean {
    return this.match.homeTeam !== this.match.awayTeam;
  }

  async execute() {
    const isMatchInvalid = !this.verifyMatch();
    if (isMatchInvalid) {
      throw new HttpRequestError('Teams must be different');
    }
    const createMatch = await this.repository.execute({ ...this.match, inProgress: true });
    return createMatch;
  }
}
