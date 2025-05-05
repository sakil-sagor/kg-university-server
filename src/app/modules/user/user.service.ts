import { TStudent } from '../student/student.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const result = await User.create(studentData);
  return result;
};

export const UserServices = {
  createStudentIntoDB,
};
