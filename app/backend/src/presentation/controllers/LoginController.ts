import { Request, Response } from 'express';
import loginUseCase from '../../useCases/loginUseCase/LoginUseCase';
import loginValidationParams from './validation/loginValidationParams';

export default class LoginController {
  constructor(private HttpRequest: Request, private response: Response) {
    this.HttpRequest = HttpRequest;
    this.response = response;
  }

  async composer() {
    const { body } = this.HttpRequest;
    await loginValidationParams(body);

    const userAuthSection = await loginUseCase.validationCredence(body);

    return this.response.status(200).json(userAuthSection);
  }
}
