import { MatchEntity } from '../../entities/MatchEntity';

export interface LeaderBoardResponse {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}
export interface LeaderBoardTeam{
  id: string;
  teamName: string;
  matchesHome: MatchEntity[];
  matchesAway: MatchEntity[];
}
export default interface ILeaderBoardRepository {
  getLeaderBoard(): Promise<LeaderBoardTeam[]>;
}

// {
//     "name": "Palmeiras",
//     "totalPoints": 13,
//     "totalGames": 5,
//     "totalVictories": 4,
//     "totalDraws": 1,
//     "totalLosses": 0,
//     "goalsFavor": 17,
//     "goalsOwn": 5,
//     "goalsBalance": 12,
//     "efficiency": 86.67
// }
