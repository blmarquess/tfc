import User from '../../../database/models/User';
import { UserEntity } from '../../../entities/UserEntity';
import { IGetUserByEmailRepository } from '../IGetUserByEmailRepository';

export class GetUserByEmailRepository implements IGetUserByEmailRepository {
  private userModel;
  constructor() { this.userModel = User; }

  async execute(email:string) {
    const user = await this.userModel.findOne({ where: { email } });
    return user as UserEntity | null;
  }
}

const getUserByEmailRepository = new GetUserByEmailRepository();

export default getUserByEmailRepository;
