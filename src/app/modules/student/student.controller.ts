import httpStatus from 'http-status';

import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';

// create student
const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { student: studentData } = req.body;

    // const zodParsedData = createStudentValidationSchema.parse(studentData);
    // console.log(zodParsedData);
    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// get single student from db with higher order function
const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDb(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

// get all student from db
const getallStudent = catchAsync(async (req, res) => {
  const result = await StudentServices.getallStudentFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

// get single student from db
// const getSingleStudent: RequestHandler = async (req, res, next) => {
//   try {
//     const { studentId } = req.params;
//     const result = await StudentServices.getSingleStudentFromDb(studentId);

//     res.status(200).json({
//       success: true,
//       message: 'Student  retrieved successfully',
//       data: result,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// delete single student

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  console.log(studentId);
  const result = await StudentServices.deleteStudentFromDb(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});

export const StudentControllers = {
  createStudent,
  getallStudent,
  getSingleStudent,
  deleteStudent,
};
