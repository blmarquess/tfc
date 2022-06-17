import User from '@db/models/User';
import { UserEntity } from '@entities/UserEntity';
import CredentialError from '@errors/CredentialError';
import StatusCodes from '@utils/statusCodes';
import * as bcryptjs from 'bcryptjs';
import { IUserRepository } from '../IUserRepository';

export class UserRepository implements IUserRepository {
  private userModel;
  constructor() { this.userModel = User; }

  async findUserByEmail(email:string) {
    const user = await this.userModel.findOne({ where: { email } });
    return user as UserEntity | null;
  }

  async validationCredence({ email, password }: { email: string, password: string }) {
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new CredentialError('Incorrect email or password', StatusCodes.UNAUTHORIZED);
    }

    const isValidePassword = await bcryptjs.compare(password, user.password);

    if (!isValidePassword) {
      throw new CredentialError('Incorrect email or password', StatusCodes.UNAUTHORIZED);
    }

    return user;
  }
}

const userRepository = new UserRepository();

export default userRepository;
