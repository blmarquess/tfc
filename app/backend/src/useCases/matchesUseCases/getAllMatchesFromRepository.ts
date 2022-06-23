import MatchesRepository from '../repositories/implementations/MatchesRepository';

export default class GetAllMatchesFromRepository {
  constructor(private repository = new MatchesRepository()) { }
  async execute() {
    const result = await this.repository.getAllMatches();
    return result;
  }
}
