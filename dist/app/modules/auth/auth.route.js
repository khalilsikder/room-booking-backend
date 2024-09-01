"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const user_validation_1 = require("./user.validation");
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
// create admin
router.post('/signUp', (0, validateRequest_1.default)(user_validation_1.userValidation.createAdminValidation), auth_controller_1.authControllers.signUp);
router.put('/login', (0, validateRequest_1.default)(user_validation_1.userValidation.updateUserValidation), auth_controller_1.authControllers.login);
exports.userRoutes = router;
