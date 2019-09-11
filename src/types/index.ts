import { Errback, Request, Response, NextFunction } from 'express';

export type MiddlewareFunctionType = (
  err: Errback,
  req: Request,
  res: Response,
  next: NextFunction
) => any;
