import express from 'express'
import { userControllers } from './user.controllers';
import validateRequest from '../../middleware/validateRequest';
import { userValidation } from './user.validation';



const router = express.Router()

// create admin
router.post ('/create-admin',validateRequest(userValidation.createAdminValidation),userControllers.createAdmin)

router.put ('/:userId',validateRequest(userValidation.updateUserValidation),userControllers.updateUser)

export const userRoutes = router;