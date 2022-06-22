import TeamRepository from './TeamRepository';
import { ITeamRepository } from '../ITeamRepository';

export default class GetAllTeamsRepository {
  private repository: ITeamRepository;
  constructor() {
    this.repository = new TeamRepository();
  }

  async execute() {
    const arrayOfTeams = await this.repository.getAllTeams();
    return arrayOfTeams;
  }
}
