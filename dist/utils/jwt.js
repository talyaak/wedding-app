"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwtToken = exports.generateJwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secret = process.env.JWT_SECRET;
function generateJwtToken(userId) {
    return jsonwebtoken_1.default.sign({ userId }, secret, { expiresIn: '7d' });
}
exports.generateJwtToken = generateJwtToken;
function verifyJwtToken(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        return decoded.userId;
    }
    catch (error) {
        const jwtError = error; // Explicit type assertion
        // Handle different types of errors
        if (jwtError.name === 'TokenExpiredError') {
            // Handle expired token error
            console.error('Token expired:', jwtError.message);
        }
        else if (jwtError.name === 'JsonWebTokenError') {
            // Handle invalid token error
            console.error('Invalid token:', jwtError.message);
        }
        else {
            // Handle other errors
            console.error('JWT verification error:', jwtError);
        }
        return null;
    }
}
exports.verifyJwtToken = verifyJwtToken;
//# sourceMappingURL=jwt.js.map