import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name required'],
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: [true, 'email required'],
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: [true, 'password required'],
      min: 5,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ['user', 'admin', 'superadmin'],
      default: 'admin',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
