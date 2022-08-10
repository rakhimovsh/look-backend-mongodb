import { Router } from 'express';
import foodsController from '../controller/foods.controller.js';


const router = Router();


router.get('/foods', foodsController.GET)
router.get('/foods/:foodId', foodsController.GET)
router.get('/foods/image/:img', foodsController.GETIMG)
router.post('/foods', foodsController.POST)
router.put('/foods/:foodId', foodsController.PUT)
router.delete('/foods/:foodId', foodsController.DELETE)




export default router