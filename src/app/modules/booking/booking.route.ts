import express from 'express';
import { bookingController } from './booking.controller';

const router = express.Router()
router.post ('/create-bookings', bookingController.createController);
router.get('/',bookingController.getAllController)
router.put('/:bookId',bookingController.getAllController)

export  const bookingRoutes = router;