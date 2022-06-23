import Match from '../../database/models/Match';

export interface IMatchesRepository {
  getAllMatches():Promise< Match[] | null>,
  getMatchesByParam(rapam:boolean):Promise< Match[] | null>,
}
