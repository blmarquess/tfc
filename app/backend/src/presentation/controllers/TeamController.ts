import { Request, Response } from 'express';
import GetTeamService from '../../useCases/teamsUseCases/GetTeamsService';
import StatusCodes from '../../utils/statusCodes';

export default class TeamController {
  private service: GetTeamService;
  constructor() {
    this.service = new GetTeamService();
  }

  async getTeamById(req: Request, res: Response) {
    const { id } = req.params;
    const teamID = parseInt(id, 10);
    const teamIdisInvalid = Number.isNaN(teamID);
    if (teamIdisInvalid) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: ' this ID is invalid' });
    }
    const thisTeam = await this.service.getTeamByID(teamID);
    return res.status(StatusCodes.OK).json(thisTeam);
  }

  async getAllTeams(req: Request, res: Response) {
    const arrayOfTeams = await this.service.getAllTeams();
    return res.status(StatusCodes.OK).json(arrayOfTeams);
  }
}
