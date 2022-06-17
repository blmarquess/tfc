import { UserEntity } from '@entities/UserEntity';

export interface IUserRepository {
  findUserByEmail(email: string): Promise<UserEntity | null>;
  validationCredence(LoginDTO: { email: string, password: string }): Promise<UserEntity | Error>;
}
