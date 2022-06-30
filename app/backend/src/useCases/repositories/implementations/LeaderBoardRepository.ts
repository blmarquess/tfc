import Match from '../../../database/models/Match';
import Team from '../../../database/models/Teams';
import SortArray from '../../../utils/sortFunction';
import { leaderBoardHomeFactory } from '../../../utils/BuilderLeaderBoardHome';
import { leaderBoardAwayFactory } from '../../../utils/BuilderLeaderBoardsAway';

type responseQuery = {
  'homeTeamGoals': number,
  'awayTeamGoals': number,
  'inProgress': false,
  'teamHome': {
    'id': number,
    'teamName': string,
  },
  'teamAway': {
    'id': number,
    'teamName': string
  }
};

export default class LeaderBoardRepository {
  constructor(private MatchRepository = Match, private TeamRepository = Team) { }
  private async getAllTeams() {
    const match = await this.MatchRepository.findAll({
      where: { inProgress: false },
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
      attributes: { exclude: ['id', 'awayTeam', 'homeTeam'] },
    });
    return match as unknown as responseQuery[];
  }

  async getLeaderBoardHome() {
    const AllTeamsNames = await this.getAllTeams();

    const teamsHome = new Array(...new Set(AllTeamsNames.map((a) => a.teamHome.teamName)));
    const factoryHome = teamsHome.map((team) => leaderBoardHomeFactory(team, AllTeamsNames));

    return SortArray(factoryHome);
  }

  async getLeaderBoardAway() {
    const AllTeamsNames = await this.getAllTeams();

    const teamsAway = new Array(...new Set(AllTeamsNames.map((a) => a.teamHome.teamName)));
    const factoryAway = teamsAway.map((team) => leaderBoardAwayFactory(team, AllTeamsNames));

    return SortArray(factoryAway);
  }
}
