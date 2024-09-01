import express from 'express'
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './auth.validation';
import { authControllers } from './auth.controller';



const router = express.Router()

router.post ('/signUp',validateRequest(AuthValidation.UserSignUPValidationSchema),authControllers.signUp)

router.post ('/login',validateRequest(AuthValidation.UserLoginValidationSchema),authControllers.login)

export const userRoutes = router;