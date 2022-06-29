import { MatchEntity } from '../../../entities/MatchEntity';
import { TeamEntity } from '../../../entities/TeamEntity';
import Match from '../../../database/models/Match';
import Team from '../../../database/models/Teams';
import ILeaderBoardRepository from '../ILeaderBoardRepository';

export default class LeaderBoardRepository implements ILeaderBoardRepository {
  constructor(private MatchRepository = Match, private TeamRepository = Team) { }

  async getLeaderBoard() {
    const ChampionTeamBoard = await this.TeamRepository.findAll() as unknown as TeamEntity[];
    const ChampionMatchBoard = await this.MatchRepository.findAll() as unknown as MatchEntity[];
    const ChampionsTable = ChampionTeamBoard.map(({ id, teamName }) => ({
      id,
      teamName,
      matchesHome: ChampionMatchBoard.filter(({ homeTeam }) => homeTeam === Number(id)),
      matchesAway: ChampionMatchBoard.filter(({ awayTeam }) => awayTeam === Number(id)),
    }));
    return ChampionsTable;
  }
}
