import { MatchEntity } from '../../../entities/MatchEntity';
import Match from '../../../database/models/Match';

export default class CreateMatchesRepository {
  constructor(private repository = Match) { }

  async execute(match: MatchEntity) {
    const createdMatch = await this.repository.create(match);
    return createdMatch;
  }
}
