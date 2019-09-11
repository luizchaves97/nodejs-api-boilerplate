import 'dotenv/config';

import Youch from 'youch';
import express from 'express';
import 'express-async-errors';

import routes from './routes';

import { MiddlewareFunctionType } from './types';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  private middlewares(): void {
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.use(routes);
  }

  private exceptionHandler() {
    this.server.use((async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    }) as MiddlewareFunctionType);
  }
}

export default new App().server;
