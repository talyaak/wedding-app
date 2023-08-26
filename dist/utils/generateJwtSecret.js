"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
// Generate a random JWT secret
const generateJwtSecret = () => {
    return crypto_1.default.randomBytes(64).toString('hex');
};
// Print the generated JWT secret
console.log("Random secret key generated:");
console.log(generateJwtSecret());
//# sourceMappingURL=generateJwtSecret.js.map