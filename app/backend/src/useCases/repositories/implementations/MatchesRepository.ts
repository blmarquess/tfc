import Team from '../../../database/models/Teams';
import Match from '../../../database/models/Match';
import { IMatchesRepository } from '../IMatchesRepository';

export default class MatchesRepository implements IMatchesRepository {
  constructor(private repository = Match) { }

  async getAllMatches() {
    const matches = await this.repository.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  async getMatchesByParam(param: boolean): Promise<Match[] | null> {
    const matches = await this.repository.findAll({
      where: { inProgress: param },
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ] });
    return matches;
  }
}
