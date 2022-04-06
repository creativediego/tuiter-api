import dotenv from 'dotenv';
import express from 'express';
import configGlobalMiddleware from './config/createGlobalMiddleware';
import createControllers from './config/createControllers';
import configDatabase from './config/configDatabase';

import {
  handleCentralError,
  handleUncaughtException,
} from './errors/handleCentralError';

dotenv.config();
const app = express();

configDatabase(process.env.MONGO_URL!);
if (process.env.NODE_ENV! === 'PRODUCTION') {
  app.set('trust proxy', true); // trust first proxy
}

app.enable('trust proxy');
configGlobalMiddleware(app);
createControllers(app);
app.use(handleCentralError);
handleUncaughtException();

app.listen(process.env.PORT! || 4000, () => {
  console.log(`Up and running on port ${process.env.PORT! || 4000}`);
});
