import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { authUserJwtDTO } from '../../useCases/authUseCase/AuthDTO';
import { verifyAuthToken } from '../../useCases/authUseCase/AuthServiceSection';

export default class AuthController {
  constructor(private HttpRequest: Request, private response: Response) {
    this.HttpRequest = HttpRequest;
    this.response = response;
  }

  public async verify() {
    const { authorization } = this.HttpRequest.headers;

    const decoded = verifyAuthToken(authorization as string) as authUserJwtDTO | JwtPayload;

    if (decoded) {
      const { role } = decoded;
      return this.response.status(200).json(role);
    }
    return this.response.status(200).json(decoded);
  }
}
