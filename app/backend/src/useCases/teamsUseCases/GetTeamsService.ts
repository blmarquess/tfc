import GetAllTeamsRepository from '../repositories/implementations/GetAllTeamsRepository';
import GetTeamByIdRepository from '../repositories/implementations/GetTeamByIdRepository';

export default class GetTeamService {
  private teamRepository: GetTeamByIdRepository;
  private allTeamsRepository: GetAllTeamsRepository;

  constructor() {
    this.teamRepository = new GetTeamByIdRepository();
    this.allTeamsRepository = new GetAllTeamsRepository();
  }

  async getAllTeams() {
    const teamsArray = this.allTeamsRepository.execute();
    return teamsArray;
  }

  async getTeamByID(id: number) {
    const team = await this.teamRepository.execute(id);
    return team;
  }
}
