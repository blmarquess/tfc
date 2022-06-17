import User from '@db/models/User';
import { Request, Response } from 'express';

export default class SignIn {
  constructor(private HttpRequest: Request, private res: Response) {
    this.HttpRequest = HttpRequest;
    this.res = res;
  }

  public async execute() {
    const { email } = this.HttpRequest.body;
    const user = await User.findOne({ where: { email } });
    return this.res.status(200).json(user);
  }
}
