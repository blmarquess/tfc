import { Handler, Request, Response, NextFunction } from 'express';

const RouterAdapter = (handler: Handler) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(handler(req, res, next))
      .catch((error) => next(error));
  };

export default RouterAdapter;
