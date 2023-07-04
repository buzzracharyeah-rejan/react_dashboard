import dotenv from 'dotenv';
dotenv.config();

export const configs = {
  db: {
    url: process.env.MONGODB_URI,
  },
  port: process.env.PORT,
};

/* CONFIGURATION */
