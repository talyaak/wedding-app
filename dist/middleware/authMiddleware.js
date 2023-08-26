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
exports.authenticateAdmin = exports.authenticateUser = void 0;
const jwt_1 = require("../utils/jwt");
const userModel_1 = __importDefault(require("../models/userModel"));
function authenticateUser(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }
    const userId = (0, jwt_1.verifyJwtToken)(token);
    if (!userId) {
        return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = userId;
    next();
}
exports.authenticateUser = authenticateUser;
function authenticateAdmin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'Token missing' });
        }
        const userId = (0, jwt_1.verifyJwtToken)(token);
        if (!userId) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.userId = userId;
        const user = yield userModel_1.default.findById(req.userId);
        if (!user)
            throw new Error('User not found');
        if (user.admin !== true) {
            return res.status(401).json({ message: 'Permission denied' });
        }
        next();
    });
}
exports.authenticateAdmin = authenticateAdmin;
//# sourceMappingURL=authMiddleware.js.map