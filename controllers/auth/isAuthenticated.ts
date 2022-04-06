import { Request, Response, Express, NextFunction } from 'express';
import UnauthorizedException from './UnauthorizedException';
/**
 * Middleware that checks if user is authenticated by checking req.user, where passport stored current user in session.
 */
export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('session', req.session);
  if (req.isAuthenticated()) {
    console.log('headers', req.headers);
    console.log('cookie', req.headers.cookie);
    next();
  } else {
    throw new UnauthorizedException('Not authenticated.');
  }
};
