import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import { UserEntity } from '@entities/UserEntity';

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const jwtConfig: jwt.SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1w',
};

interface userData {
  id: number,
  role: string,
  username: string,
}

export const generateAuthToken = (payload: userData): string =>
  jwt.sign(payload, SECRET, jwtConfig);

export const verifyAuthToken = (token: string) => jwt.verify(token, SECRET);

export default class AuthServiceSection {
  public static async generateAuthToken(User:UserEntity) {
    return generateAuthToken({
      id: User.id,
      role: User.role,
      username: User.username,
    });
  }

  public static async verifyAuthToken(token: string) {
    return verifyAuthToken(token);
  }
}
