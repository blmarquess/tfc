import Match from '../../../database/models/Match';

export default class UpdateMatchesRepository {
  constructor(private repository = Match) { }

  async updateMatchProgressStatus(id: number) {
    const [updatedMatch] = await this.repository.update({ inProgress: false }, { where: { id } });
    if (updatedMatch) {
      return { message: 'Finished' };
    }
    throw new Error('🐛 UpdateInProgress error');
  }

  async updateMatchGoalsStatus(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    const [updatedMatch] = await this.repository.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
    if (updatedMatch) {
      return { message: 'Match Updated' };
    }
    throw new Error('🐛 UpdateGoalsMatch error');
  }
}
