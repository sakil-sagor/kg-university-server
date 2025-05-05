import express from 'express';
import { UserController } from './user.controller';
const router = express.Router();

router.post('/create-student', UserController.createStudent);
router.get('/', UserController.getallUser);
router.get('/:userId', UserController.getSingleUser);
router.delete('/:userId', UserController.deleteUser);
router.patch('/:userId', UserController.updateUser);

export const UserRoutes = router;
