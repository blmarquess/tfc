import { MatchEntity } from '../../../entities/MatchEntity';
import Match from '../../../database/models/Match';

export default class UpdateMatchesRepository {
  constructor(private repository = new Match()) { }

  async updateMatch(match: MatchEntity) {
    const updatedMatch = await this.repository.update(match, {
      where: { id: match.id },
    });
    return updatedMatch;
  }
}
