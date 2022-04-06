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
  if (req.isAuthenticated()) {
    console.log('Is authenticated');
    console.log('protocol', req.protocol);
    next();
  } else {
    throw new UnauthorizedException('Not authenticated.');
  }
};
