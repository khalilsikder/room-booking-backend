import express from 'express';
import { bookingController } from './booking.controller';

const router = express.Router()
router.post ('/', bookingController.createController);
router.get('/',bookingController.getAllController)

export  const bookingRoutes = router;