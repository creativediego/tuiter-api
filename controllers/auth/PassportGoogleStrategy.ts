import dotenv from 'dotenv';
import { Router, Express, Request, Response, NextFunction } from 'express';
import passport, { PassportStatic } from 'passport';
import IPassportStrategy from './IPassPortStrategy';
import { Strategy } from 'passport-google-oauth20';
import { Passport } from 'passport';
import IDao from '../../daos/shared/IDao';
import IUser from '../../models/users/IUser';
import { IUserDao } from '../../daos/users/IUserDao';
import AuthException from './AuthException';
import { StatusCode } from '../shared/HttpStatusCode';
import { handleCentralError } from '../../errors/handleCentralError';
import jwt from 'jsonwebtoken';
dotenv.config();

/**
 * Implements a passport Google OAuth strategy.
 */
export default class PassportGoogleStrategy implements IPassportStrategy {
  public constructor() {}
  execute(path: string, router: Router, dao: IUserDao): void {
    passport.use(
      new Strategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          callbackURL: `${path}/google/callback`,
          proxy: true,
        },
        async function (
          accessToken: any,
          refreshToken: any,
          profile: any,
          done: Function
        ) {
          try {
            const user: IUser = {
              name: profile.displayName,
              password: undefined!,
              bio: undefined!,
              profilePhoto: profile.photos[0].value,
              birthday: undefined!,
              accountType: undefined!,
              headerImage: undefined!,
              username: undefined!,
              email: profile.emails[0].value,
            };
            const dbUser: IUser = await dao.create(user);
            return done(null, dbUser);
          } catch (err) {
            return done(err, null);
          }
        }
      )
    );
    router.get(
      '/google',
      passport.authenticate('google', { scope: ['profile', 'email'] })
    );

    router.get(
      '/google/callback',
      passport.authenticate('google', {
        failureRedirect: `${process.env.CLIENT_URL!}/error`,
        session: false,
      }),
      (req, res) => {
        console.log('google auth', req.user);
        const token = jwt.sign(
          {
            expiresIn: '12h',
            user: req.user,
          },
          'test'
        );
        res.cookie('x-auth-cookie', token);
        res.redirect(process.env.CLIENT_URL!);
      }
    );
  }
}
