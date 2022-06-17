import { Router } from 'express';
import SignInFactory from '@useCases/Login/SignIn';
import RouterAdapter from '@adapters/ExpressRouterAdapter';

const LoginRouter = Router();

LoginRouter.get('/', (_req, res, _next) => res.status(200).json({
  message: 'You are on router Login!',
}));

LoginRouter.post('/', RouterAdapter(SignInFactory));

export default LoginRouter;
