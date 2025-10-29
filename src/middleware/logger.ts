import { NextFunction, Request, Response } from 'express';

/**
 * Logger middleware to log the request and response
 * @param {Request} req - The HTTP request
 * @param {Response} res - The HTTP response
 * @param {NextFunction} next - The next middleware function
 */
function logger(req: Request, res: Response, next: NextFunction): void {
  // Log the request
  console.log(
    `[${new Date().toLocaleString()}] - Method: ${req.method} ${req.url}`,
  );

  // Log the response status code
  res.on('finish', () => {
    console.log(
      `[${new Date().toLocaleString()}] - Status: ${res.statusCode} ${res.statusMessage}`,
    );
  });
  next();
}

export default logger;
