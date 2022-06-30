import mergeTeamResults, { teamRes } from '../../utils/JoinMatchesToLeaderBoard';
import LeaderBoardRepository from '../repositories/implementations/LeaderBoardRepository';

export default class LeaderBoardUseCase {
  constructor(private repository = new LeaderBoardRepository()) { }

  public async getLeaderBoardHome() {
    const HomeLeaderBoard = await this.repository.getLeaderBoardHome();
    return HomeLeaderBoard;
  }

  public async getLeaderBoardAway() {
    const AwayLeaderBoard = await this.repository.getLeaderBoardAway();
    return AwayLeaderBoard;
  }

  public async getAllBoardMatch() {
    const matchesInHome = await this.repository.getLeaderBoardHome() as unknown as teamRes[];
    const matchesInAway = await this.repository.getLeaderBoardAway() as unknown as teamRes[];
    const joinMatchesResults = matchesInHome.map((homeMatch) => {
      const awayMatch = matchesInAway.find(({ name }) => name === homeMatch.name) as teamRes;
      return { ...mergeTeamResults(homeMatch, awayMatch) };
    });
    return joinMatchesResults;
  }
}
