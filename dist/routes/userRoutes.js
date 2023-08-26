"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const userController_1 = require("../controllers/userController"); // Create these functions
const router = express_1.default.Router();
// Protected route for fetching user's RSVP data
router.get('/rsvp', authMiddleware_1.authenticateUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const userRSVP = yield (0, userController_1.getUserRSVP)(userId);
        if (!userRSVP) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json(userRSVP);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}));
// Protected route for updating user's RSVP data
router.put('/rsvp', authMiddleware_1.authenticateUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const updatedRSVP = req.body;
        const success = yield (0, userController_1.updateUserRSVP)(userId, updatedRSVP);
        if (!success) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json({ message: 'RSVP updated successfully' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}));
// Protected route for fetching user's RSVP data
router.get('/admin', authMiddleware_1.authenticateAdmin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersData = yield (0, userController_1.getAllUsersData)();
        return res.json(usersData);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}));
exports.default = router;
//# sourceMappingURL=userRoutes.js.map