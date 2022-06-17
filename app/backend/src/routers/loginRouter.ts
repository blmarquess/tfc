import { Router } from 'express';
import userRepository from '../repositories/implementations/UserRepository';
// import SignInFactory from '@factories/SignInFactory';
// import RouterAdapter from '@adapters/ExpressRouterAdapter';

const LoginRouter = Router();

LoginRouter.get('/', (_req, res, _next) => res.status(200).json({
  message: 'You are on router Login!',
}));

LoginRouter.post('/', async (req, res, _next) => {
  const { email } = req.body;
  const user = await userRepository.findByEmail(email);
  res.status(200).json(user);
});
// LoginRouter.post('/', RouterAdapter(SignInFactory));

export default LoginRouter;
