import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../config';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-porgress', 'blocked'],
      default: 'in-porgress',
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// pre middleware for saving student data
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // hasing password

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TUser>('User', userSchema);
