import express, { Express } from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';
import cors from 'cors';
// import cookieParser from 'cookie-parser';
import cookieParser from 'cookie-parser';

const createGlobalMiddleware = (app: Express) => {
  app.use(express.json());
  app.use(
    cors({
      credentials: true,
      origin: process.env.CLIENT_URL!,
      methods: 'GET, POST, PUT, DELETE',
      preflightContinue: true,
    })
  );
  app.use(cookieParser('test'));
  app.use(
    cookieSession({
      name: 'session',
      keys: ['test'],
      secret: 'test',
      maxAge: 24 * 60 * 60 * 100,
      sameSite: false,
      secure: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};

export default createGlobalMiddleware;
