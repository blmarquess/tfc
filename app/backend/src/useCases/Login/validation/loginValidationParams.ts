import HttpRequestError from '@errors/HttpRequestError';
import StatusCodes from '@utils/statusCodes';

type requestBody = {
  email: string;
  password: string;
};

export default async function loginValidationParams(requestBody:requestBody) {
  if (!requestBody.email || !requestBody.password) {
    throw new HttpRequestError('All fields must be filled', StatusCodes.BAD_REQUEST);
  }
}
