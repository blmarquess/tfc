import Match from '../../database/models/Match';

export interface ICreateMatchesRepository {
  execute(match: Match): Promise<Match>;
}
