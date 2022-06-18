import { Router } from 'express';
import RouterAdapter from '../adapters/ExpressRouterAdapter';
import LoginFactory from '../factories/LoginFactory';

const LoginRouter = Router();

LoginRouter.get('/', (_req, res, _next) => res.status(200).json({
  message: 'You are on router Login!',
}));

LoginRouter.post('/', RouterAdapter(LoginFactory));

export default LoginRouter;
