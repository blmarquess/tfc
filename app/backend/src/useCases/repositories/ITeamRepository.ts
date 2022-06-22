import Team from '../../database/models/Teams';

export interface ITeamRepository {
  getAllTeams(): Promise<Team[] | null>;
  getTeam(id: number): Promise<Team | null>;
}
