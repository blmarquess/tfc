import { MatchEntity } from '../../entities/MatchEntity';
import Match from '../../database/models/Match';

export interface ICreateMatchesRepository {
  verifyIfExistTeams(num:number, num2:number): Promise<boolean>;
  execute(newMatch: MatchEntity): Promise<Match>;
}
