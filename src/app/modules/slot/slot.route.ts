import express from 'express'
import { slotController } from './slot.controller';
const router = express.Router();


router.post('/create-slot',slotController.createSlot)
router.get('/',slotController.getSlot)

export const slotRoutes = router