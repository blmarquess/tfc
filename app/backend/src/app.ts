import * as express from 'express';
import router from './presentation/routers/routers';
import ExpressErrorHandlerAdapter from './presentation/adapters/ExpressErrorHandlerAdapter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorMiddleware();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use(router);
  }

  private errorMiddleware(): void {
    this.app.use(ExpressErrorHandlerAdapter);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`executando na porta ${PORT}`));
  }
}

export { App };

export const { app } = new App();
