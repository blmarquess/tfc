import { Request, Response } from 'express';
import { verifyAuthToken } from '../../useCases/authUseCase/AuthServiceSection';

export default class AuthController {
  constructor(private HttpRequest: Request, private response: Response) {
    this.HttpRequest = HttpRequest;
    this.response = response;
  }

  public async verify() {
    const { authorization } = this.HttpRequest.headers;

    const decoded = verifyAuthToken(authorization as string);
    return this.response.status(201).json(decoded);
  }
}
