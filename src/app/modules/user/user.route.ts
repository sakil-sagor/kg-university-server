import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-student', UserControllers.createStudent);
// router.get('/', UserControllers.getallUser);
// router.get('/:userId', UserControllers.getSingleUser);
// router.delete('/:userId', UserControllers.deleteUser);
// router.patch('/:userId', UserControllers.updateUser);

export const UserRoutes = router;
