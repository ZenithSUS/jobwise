import { NextFunction, Request, Response } from 'express';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log(
    `[${new Date().toLocaleString()}] - Method: ${req.method} ${req.url}`,
  );
  next();
}

export default logger;
