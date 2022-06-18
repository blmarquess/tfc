import { UserEntity } from '../../entities/UserEntity';

export interface IGetUserByEmailRepository {
  execute(email: string): Promise<UserEntity | null>;
}
