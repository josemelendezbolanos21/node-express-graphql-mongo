import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export async function connect() {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useFindAndModify: false });
    console.log('Db connected');
  } catch {
    console.log('Something went wrong');
  } 
}

