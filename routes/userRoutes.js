import express from 'express'
import { createUser, getUserById, getUsers, Login, updateUser } from '../controller/userController.js';

const router = express.Router();

router.route('/get').get(getUsers)
router.route('/get/:id').get(getUserById)
router.route('/post').post(createUser)
router.route('/update/:id').put(updateUser)
router.route('/login').post(Login)

export default router