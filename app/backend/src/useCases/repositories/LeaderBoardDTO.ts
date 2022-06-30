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
export interface LeaderBoardDTO{
  id: string;
  teamName: string;
  matchesHome: MatchEntity[];
  matchesAway: MatchEntity[];
}

// name: done
// totalPoints: done
// totalGames: done
// totalVictories: done;
// totalDraws: number;
// totalLosses: number;
// goalsFavor: number;
// goalsOwn: number;
// goalsBalance: number;
// efficiency: number;
