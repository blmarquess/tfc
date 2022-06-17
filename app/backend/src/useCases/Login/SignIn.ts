import User from '@db/models/User';
import { NextFunction, Request, Response } from 'express';

class SignIn {
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

const SignInFactory = (req: Request, res: Response, _next: NextFunction) =>
  new SignIn(req, res).execute();

export default SignInFactory;
