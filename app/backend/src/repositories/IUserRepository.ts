import { UserEntity } from '@entities/UserEntity';

export interface IUserRepository {
  findByEmail(email: string): Promise<UserEntity | null>;
}
