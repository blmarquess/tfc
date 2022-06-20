import * as Joi from 'joi';
import HttpRequestError from '../../errors/HttpRequestError';
import StatusCodes from '../../../utils/statusCodes';
import { LoginDTO } from '../../../useCases/loginUseCase/LoginDTO';

const paramsSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export default async function loginValidationParams(requestBody:LoginDTO) {
  if (!requestBody.email || !requestBody.password) {
    throw new HttpRequestError('All fields must be filled', StatusCodes.BAD_REQUEST);
  }
  const { email, password } = requestBody;
  const { error } = paramsSchema.validate({ email, password });
  if (error) {
    throw new HttpRequestError('Incorrect email or password', StatusCodes.UNAUTHORIZED);
  }
}
