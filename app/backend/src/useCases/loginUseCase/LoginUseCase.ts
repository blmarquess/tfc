import * as bcryptjs from 'bcryptjs';
import { AuthServiceSection } from '../authUseCase/AuthServiceSection';
import StatusCodes from '../../utils/statusCodes';
import getUserByEmailRepository from '../repositories/implementations/GetUserByEmailRepository';
import CredentialError from './errors/CredentialError';

export class LoginUseCase {
  private getUserByEmail;
  constructor() { this.getUserByEmail = getUserByEmailRepository; }

  async validationCredence({ email, password }: { email: string, password: string }) {
    const user = await this.getUserByEmail.execute(email);
    const thisUserIsInvalid = !user;
    if (thisUserIsInvalid) {
      throw new CredentialError('Incorrect email or password', StatusCodes.UNAUTHORIZED);
    }

    const isInvalidPassword = !bcryptjs.compareSync(password, user.password);

    if (isInvalidPassword) {
      throw new CredentialError('Incorrect email or password', StatusCodes.UNAUTHORIZED);
    }
    const token = await AuthServiceSection.generateAuthToken(user);

    return {
      user: { id: user.id, username: user.username, role: user.role, email: user.email },
      token,
    };
  }
}

const loginUseCase = new LoginUseCase();

export default loginUseCase;
