import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_passwrod as string);
  userData.role = 'student';
  //   set user id manually
  userData.id = '2025101';
  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
  return newUser;
};

export const UserServices = {
  createStudentIntoDB,
};
