import UpdateMatchesRepository from '../repositories/implementations/UpdateMatchesRepository';

export default class UpdateMatchUseCases {
  private serviceMatchRepository: UpdateMatchesRepository;
  constructor() {
    this.serviceMatchRepository = new UpdateMatchesRepository();
  }

  async updateMatchProgressStatus(id: number) {
    const updatedMatchStatus = await this.serviceMatchRepository.updateMatchProgressStatus(id);
    return updatedMatchStatus;
  }

  async updateMatchGoalsStatus(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    const updatedMatchGoals = await this.serviceMatchRepository
      .updateMatchGoalsStatus(id, homeTeamGoals, awayTeamGoals);
    return updatedMatchGoals;
  }
}
