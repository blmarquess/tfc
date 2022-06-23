import Match from '../../../database/models/Match';
import { IMatchesRepository } from '../IMatchesRepository';

export default class MatchesRepository implements IMatchesRepository {
  constructor(private repository = Match) { }

  async getAllMatches() {
    const matches = await this.repository.findAll();
    return matches;
  }

  async getMatchesByParam(param: boolean): Promise<Match[] | null> {
    const matches = await this.repository.findAll({ where: { inProgress: param } });
    return matches;
  }
}
