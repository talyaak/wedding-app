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
exports.validateUser = exports.logoutUser = exports.loginUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = __importDefault(require("../models/userModel"));
const jwt_1 = require("../utils/jwt");
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const phoneNumber = req.body.phoneNumber;
            const password = req.body.password;
            const user = yield userModel_1.default.findOne({ phoneNumber });
            if (!user || !bcrypt_1.default.compareSync(password, user.password)) {
                res.status(401).json({ message: 'Invalid credentials' });
                return;
            }
            const token = (0, jwt_1.generateJwtToken)(user._id.toString());
            res.cookie('token', token, {
                httpOnly: true,
                // secure: true, // Enable this in production with HTTPS
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });
            // Send user information without sensitive fields
            const customUser = {
                phoneNumber: user.phoneNumber,
                name: user.name,
                rsvp: user.rsvp,
                admin: !!user.admin
            };
            const loginResponse = {
                message: 'Login successful',
                user: customUser,
            };
            res.status(200).json(loginResponse);
        }
        catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.loginUser = loginUser;
function logoutUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Clear the authentication cookie by setting an empty cookie with the same name and options
            res.clearCookie('token', {
                httpOnly: true,
                // secure: true, // Enable this in production with HTTPS
                sameSite: 'strict',
                maxAge: 0, // Set the maxAge to 0 to immediately expire the cookie
            });
            res.status(200).json({ message: 'Logout successful' });
        }
        catch (error) {
            console.error('Error logging out:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
exports.logoutUser = logoutUser;
function validateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userModel_1.default.findById(req.userId);
            if (!user)
                throw new Error('User not found');
            const customUser = {
                phoneNumber: user.phoneNumber,
                name: user.name,
                rsvp: user.rsvp,
                admin: !!user.admin
            };
            const loginResponse = {
                isAuthenticated: true,
                user: customUser,
            };
            res.status(200).json(loginResponse);
        }
        catch (error) {
            res.status(401).json({ isAuthenticated: false });
            console.log(error);
        }
    });
}
exports.validateUser = validateUser;
//# sourceMappingURL=authController.js.map