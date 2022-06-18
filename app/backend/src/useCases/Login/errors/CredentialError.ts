import StatusCodes from '@utils/statusCodes';

export default class CredentialError extends Error {
  constructor(public message: string, public statusCode?: number) {
    super(message);
    this.name = 'CredentialError';
    this.statusCode = statusCode || StatusCodes.BAD_REQUEST;
  }
}
