import express from 'express'
import { roomController } from './room.controller'

const router = express.Router()
router.post('/create-room',roomController.createController)
router.get('/:roomId',roomController.getSingleController)
router.get('/',roomController.getAllController)
router.put('/:roomId',roomController.updateSingleController)
router.delete('/:roomId',roomController.deleteSingleController)

export const roomRoutes = router;