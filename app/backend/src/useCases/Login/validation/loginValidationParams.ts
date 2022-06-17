import HttpRequestError from '@errors/HttpRequestError';
import StatusCodes from '@utils/statusCodes';
import * as Joi from 'joi';

const paramsSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

type requestBody = {
  email: string;
  password: string;
};

export default async function loginValidationParams(requestBody:requestBody) {
  if (!requestBody.email || !requestBody.password) {
    throw new HttpRequestError('All fields must be filled', StatusCodes.BAD_REQUEST);
  }
  const { email, password } = requestBody;
  const { error } = paramsSchema.validate({ email, password });
  if (error) {
    throw new HttpRequestError('Incorrect email or password', StatusCodes.BAD_REQUEST);
  }
}
