import LoginController from '@useCases/Login/LoginController';
import { NextFunction, Request, Response } from 'express';

const LoginFactory = (req: Request, res: Response, _next: NextFunction) =>
  new LoginController(req, res).execute();

export default LoginFactory;
