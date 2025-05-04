import { Types } from 'mongoose';
import { TStudent } from './student.interface';
import { Student } from './student.model';

//create student in db
const createStudentIntoDB = async (studentData: TStudent) => {
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!');
  // }
  const result = await Student.create(studentData);
  return result;
};

// get all of students
const getallStudentFromDb = async () => {
  const result = await Student.find();
  return result;
};
// get single student
const getSingleStudentFromDb = async (studentId: string) => {
  // const result = await StudentModel.findOne({ _id: studentId });
  const result = await Student.aggregate([
    { $match: { _id: new Types.ObjectId(studentId) } },
  ]);

  return result;
};
// delete student but it is update
const deleteStudentFromDb = async (studentId: string) => {
  const result = await Student.updateOne(
    { _id: studentId },
    { isDeleted: true },
  );
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getallStudentFromDb,
  getSingleStudentFromDb,
  deleteStudentFromDb,
};
