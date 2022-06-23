import Match from '../../database/models/Match';

export interface IUpdateMatchesRepository {
  updateMatch(match: Match): Promise<Match>;
}
