import { Request, Response } from 'express';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message,
    });
  }
};

export const UserController = {
  createStudent,
};
