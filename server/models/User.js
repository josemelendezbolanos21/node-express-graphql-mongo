import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: Number,
});

export default model('users', userSchema);