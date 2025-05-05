import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlwares/globalErrorHandler';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

// global error handler
app.use(globalErrorHandler);

export default app;
