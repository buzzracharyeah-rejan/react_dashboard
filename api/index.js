import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { configs } from './src/configs/index.js';
import { dbConnect } from './src/modals/instance.js';
import { clientRoutes, generalRoutes, managementRoutes, salesRoutes } from './src/routes/index.js';

/* DATA IMPORTS */
import User from './src/modals/user.model.js';
import { dataUser } from './src/data/index.js';

const app = express();

/* CONFIGURATION */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(morgan('dev'));
app.use(cors());

/* ROUTES */
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

app.listen(configs.port, async () => {
  try {
    await dbConnect();
    console.log('DB connection success! 🚀');
    console.log(`APP listening to PORT: ${configs.port}! 🚀`);

    /* ONLY ADD DATA ONE TIME */
    // User.insertMany(dataUser);
  } catch (error) {
    console.error(error);
  }
});
