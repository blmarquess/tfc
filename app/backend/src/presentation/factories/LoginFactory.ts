import { NextFunction, Request, Response } from 'express';
import LoginController from '../controllers/LoginController';

const LoginFactory = (req: Request, res: Response, _next: NextFunction) =>
  new LoginController(req, res).composer();

export default LoginFactory;
