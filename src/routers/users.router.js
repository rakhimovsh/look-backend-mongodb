import { Router } from 'express';
import usersController from '../controller/users.controller.js';


const router = Router();


router.get('/users', usersController.GET);
router.get('/users/:userId', usersController.GET)
router.post('/users', usersController.POST);
router.put('/users/:userId', usersController.PUT);
router.delete('/users/:userId', usersController.DELETE);


export default router;