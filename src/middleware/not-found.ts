import { NextFunction, Request, Response } from 'express';

function notFound(req: Request, res: Response, next: NextFunction) {
  const error = new Error(
    `Route not found: ${req.method} - ${req.originalUrl}`,
  );
  res.status(404);
  next(error);
}

export default notFound;
