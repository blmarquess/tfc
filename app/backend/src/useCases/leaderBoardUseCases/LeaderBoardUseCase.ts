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
}
