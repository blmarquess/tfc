import TeamRepository from './TeamRepository';
import { ITeamRepository } from '../ITeamRepository';

export default class GetTeamByIdRepository {
  private repository: ITeamRepository;
  constructor() {
    this.repository = new TeamRepository();
  }

  async execute(id: number) {
    const teamFinder = await this.repository.getTeam(id);
    return teamFinder;
  }
}
