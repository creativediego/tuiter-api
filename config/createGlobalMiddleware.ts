import express, { Express } from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';
import cors from 'cors';
import session from 'express-session';

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
  // app.use(
  //   cookieSession({
  //     name: 'session',
  //     keys: [process.env.SESSION_KEYS!],
  //     maxAge: 24 * 60 * 60 * 100,
  //     sameSite: process.env.NODE_ENV === 'PRODUCTION' ? 'none' : 'lax',
  //     secure: process.env.NODE_ENV === 'PRODUCTION',
  //     httpOnly: true,
  //     domain: process.env.CLIENT_URL!,
  //   })
  // );

  app.use(
    session({
      name: 'session',
      resave: false,
      saveUninitialized: false,
      secret: process.env.SESSION_KEYS!,
      proxy: true,
      cookie: {
        maxAge: 1000 * 60 * 24, // 24 hours
        secure: true,
        httpOnly: true,
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};

export default createGlobalMiddleware;
