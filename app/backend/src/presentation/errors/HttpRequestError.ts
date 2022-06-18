import StatusCodes from '@utils/statusCodes';

export default class HttpRequestError extends Error {
  constructor(public message: string, public statusCode?: number) {
    super(message);
    this.name = 'HttpRequestError';
    this.statusCode = statusCode || StatusCodes.BAD_REQUEST;
  }
}
