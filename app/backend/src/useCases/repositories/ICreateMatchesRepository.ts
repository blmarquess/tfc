import { MatchEntity } from '../../entities/MatchEntity';
import Match from '../../database/models/Match';

export interface ICreateMatchesRepository {
  execute(newMatch: MatchEntity): Promise<Match>;
}
