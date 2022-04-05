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
  console.log('REQ USER', req.user);
  if (req.isAuthenticated()) {
    next();
  } else {
    throw new UnauthorizedException('Not authenticated.');
  }
};
