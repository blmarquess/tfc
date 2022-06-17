import { Request, Response } from 'express';
import userRepository from '@repositories/implementations/UserRepository';
import AuthServiceSection from '@useCases/Auth/AuthServiceSection';
import loginValidationParams from './validation/loginValidationParams';

export default class LoginController {
  constructor(private HttpRequest: Request, private response: Response) {
    this.HttpRequest = HttpRequest;
    this.response = response;
  }

  async composer() {
    const { body } = this.HttpRequest;
    await loginValidationParams(body);

    const user = await userRepository.validationCredence(body);

    const token = await AuthServiceSection.generateAuthToken(user);
    return this.response.status(200).json({
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        email: user.email,
      },
      token,
    });
  }
}
