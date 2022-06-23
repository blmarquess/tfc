import MatchesRepository from '../repositories/implementations/MatchesRepository';

export default class GetMatchesByParamsFromRepository {
  constructor(private repository = new MatchesRepository()) { }
  async execute(param:boolean) {
    const result = await this.repository.getMatchesByParam(param);
    return result;
  }
}
