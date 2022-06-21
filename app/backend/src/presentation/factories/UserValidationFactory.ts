import { NextFunction, Request, Response } from 'express';
import AuthController from '../controllers/AuthController';

const UserValidationFactory = (req: Request, res: Response, _next: NextFunction) =>
  new AuthController(req, res).verify();

export default UserValidationFactory;
