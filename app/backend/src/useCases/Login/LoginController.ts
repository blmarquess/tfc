import { Request, Response } from 'express';
// import User from '@db/models/User';
import loginValidationParams from './validation/loginValidationParams';

export default class LoginController {
  constructor(private HttpRequest: Request, private response: Response) {
    this.HttpRequest = HttpRequest;
    this.response = response;
  }

  async execute() {
    const { body } = this.HttpRequest;
    await loginValidationParams(body);

    // const { email } = this.HttpRequest.body;
    // const user = await User.findOne({ where: { email } });
    return this.response.status(200).json(body);
  }
}
