import { MatchEntity } from '../../../entities/MatchEntity';
import { TeamEntity } from '../../../entities/TeamEntity';

import Match from '../../../database/models/Match';
import Team from '../../../database/models/Teams';

import { ICreateMatchesRepository } from '../ICreateMatchesRepository';

export default class CreateMatchesRepository implements ICreateMatchesRepository {
  private repository = Match;
  private teamRepository = Team;

  async verifyIfExistTeams(num: number, num2: number) {
    const match = await this.teamRepository
      .findAll({ where: { id: [num, num2] } }) as unknown as TeamEntity[];
    return match.length !== 2;
  }

  async execute(newMatch: MatchEntity) {
    const createdMatch = await this.repository.create(newMatch);
    return createdMatch;
  }
}
