import { MatchEntity } from '../../../entities/MatchEntity';
import Match from '../../../database/models/Match';
import { ICreateMatchesRepository } from '../ICreateMatchesRepository';

export default class CreateMatchesRepository implements ICreateMatchesRepository {
  private repository = Match;

  async execute(newMatch: MatchEntity) {
    const createdMatch = await this.repository.create(newMatch);
    return createdMatch;
  }
}
