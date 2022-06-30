import { LeaderBoardDTO } from './LeaderBoardDTO';

export default interface ILeaderBoardRepository {
  getLeaderBoard(): Promise<LeaderBoardDTO[]>;
}
