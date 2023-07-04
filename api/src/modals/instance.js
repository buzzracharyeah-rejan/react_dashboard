import mongoose from 'mongoose';
import { configs } from '../configs/index.js';

export const dbConnect = async () => {
  return mongoose.connect(configs.db.url, { useNewUrlParser: true, useUnifiedTopology: true });
};
