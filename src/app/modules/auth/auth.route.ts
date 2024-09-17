import express from 'express';
// import auth from '../../middlewares/auth';
// import validateRequest from '../../middlewares/validateRequest';
// import { USER_ROLE } from '../User/user.constant';
import { AuthControllers } from './auth.controller';
import { AuthValidation } from './auth.validation';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { USER_Role } from '../user/user.constants';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);

router.post(
  '/change-password',
  auth(
    // USER_Role.superAdmin,
    USER_Role.ADMIN,
  ),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePassword,
);

router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken,
);

router.post(
  '/forget-password',
  validateRequest(AuthValidation.forgetPasswordValidationSchema),
  AuthControllers.forgetPassword,
);

router.post(
  '/reset-password',
  validateRequest(AuthValidation.forgetPasswordValidationSchema),
  AuthControllers.resetPassword,
);

export const AuthRoutes = router;