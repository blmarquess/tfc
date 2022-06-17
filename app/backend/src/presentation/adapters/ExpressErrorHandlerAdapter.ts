import { NextFunction, Response, Request } from 'express';

type ErrorRequest = {
  statusCode: number,
  type: string,
  message: string,

};

function ExpressErrorHandlerAdapter(
  error: ErrorRequest,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error?.statusCode) {
    return res.status(error.statusCode).json({
      status: error.statusCode,
      type: error.type,
      message: error.message,
    });
  }
  if (error) {
    return res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
  } next();
}

export default ExpressErrorHandlerAdapter;
