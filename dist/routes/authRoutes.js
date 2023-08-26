"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post('/login', authController_1.loginUser);
router.post('/logout', authController_1.logoutUser);
router.post('/validate', authMiddleware_1.authenticateUser, authController_1.validateUser);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map