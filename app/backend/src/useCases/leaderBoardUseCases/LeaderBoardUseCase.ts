import LeaderBoardBuilder from '../../utils/LeaderBoardBuilder';
import LeaderBoardRepository from '../repositories/implementations/LeaderBoardRepository';

export default class LeaderBoardUseCase {
  constructor(private repository = new LeaderBoardRepository()) { }

  public async getLeaderBoardHome() {
    const dataChampion = await this.repository.getLeaderBoard();
    const FormattedBoardHome = new LeaderBoardBuilder(dataChampion).CreateLeaderBoardHome();
    return FormattedBoardHome;
  }

  public async getLeaderBoardAway() {
    const dataChampion = await this.repository.getLeaderBoard();
    const FormattedBoardAway = new LeaderBoardBuilder(dataChampion).CreateLeaderBoardAway();
    return FormattedBoardAway;
  }
}
