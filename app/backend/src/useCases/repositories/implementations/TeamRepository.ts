import Team from '../../../database/models/Teams';
import { ITeamRepository } from '../ITeamRepository';

export default class TeamRepository implements ITeamRepository {
  constructor(private repository = Team) { }

  async getAllTeams(): Promise<Team[] | null> {
    const allTeams = await this.repository.findAll();
    return allTeams;
  }

  async getTeam(id: number): Promise<Team | null> {
    const temRequeued = await this.repository.findOne({ where: { id } });
    return temRequeued;
  }
}
