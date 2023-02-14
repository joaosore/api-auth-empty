import mongoose from 'mongoose';

require('dotenv').config();

export const connectDatabase = async (): Promise<void> => {
  try {
    // mongoose.set('strictQuery', false);
    // mongoose.connect(
    //   `${process.env.DB_PROTOCOL}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`,
    // );
    // console.log('Connected to MongoDb');
  } catch (e) {
    // console.log('MongoDb', e);
  }
};
