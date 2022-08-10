import { Router } from 'express';
import ordersController from '../controller/orders.controller.js';


const router = Router();


router.get('/orders', ordersController.GET)
router.get('/orders/:orderId', ordersController.GET)
router.post('/orders', ordersController.POST)
router.put('/orders/:orderId', ordersController.PUT)
router.delete('/orders/:orderId', ordersController.DELETE)


export default router