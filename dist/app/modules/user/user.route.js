"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controllers_1 = require("./user.controllers");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
// create admin
router.post('/create-admin', (0, validateRequest_1.default)(user_validation_1.userValidation.createAdminValidation), user_controllers_1.userControllers.createAdmin);
router.put('/:userId', (0, validateRequest_1.default)(user_validation_1.userValidation.updateUserValidation), user_controllers_1.userControllers.updateUser);
exports.userRoutes = router;
