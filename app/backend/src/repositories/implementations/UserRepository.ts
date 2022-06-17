import User from '@db/models/User';
import { UserEntity } from '@entities/UserEntity';
import { IUserRepository } from '../IUserRepository';

export class UserRepository implements IUserRepository {
  private userModel;
  constructor() {
    this.userModel = User;
  }

  async findByEmail(email:string) {
    const user = await this.userModel.findOne({ where: { email } });
    return user as UserEntity | null;
  }
}

const userRepository = new UserRepository();

export default userRepository;
