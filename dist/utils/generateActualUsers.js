"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mongoose_1 = __importDefault(require("mongoose"));
const userModel_1 = __importStar(require("../models/userModel")); // Update the import path
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const promises_1 = __importDefault(require("fs/promises"));
const password_1 = require("./generateRealUsers/password");
const inputData_1 = require("./generateRealUsers/inputData");
dotenv_1.default.config();
// Connect to MongoDB
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const mongoUri = process.env.MONGODB_URI;
    try {
        yield mongoose_1.default.connect(mongoUri);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
});
function getRandomEnumValue(enumObj) {
    const values = Object.values(enumObj);
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}
// Function to generate a random RSVPData
const generateDefaultRSVPData = () => {
    // Default state for a new user
    const attending = userModel_1.RsvpState.NotReplied;
    let numberOfGuests = 0;
    return {
        attending: attending,
        numberOfGuests: numberOfGuests,
    };
};
const generateRandomPassword = (plainTextPassword) => {
    const saltRounds = 10;
    return new Promise((resolve, reject) => {
        bcrypt_1.default.hash(plainTextPassword, saltRounds, (err, hashedPassword) => {
            if (err) {
                reject(`Error hashing password: ${err}`);
            }
            else {
                resolve(hashedPassword);
            }
        });
    });
};
// Generate and save random users
const generateRandomUsers = (count) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userLog = [];
        const userSavingPromises = inputData_1.userArray.map((userData) => __awaiter(void 0, void 0, void 0, function* () {
            const hashedPassword = yield generateRandomPassword(password_1.password);
            const user = new userModel_1.default({
                phoneNumber: userData.Phone,
                name: userData.Name,
                password: hashedPassword,
                rsvp: generateDefaultRSVPData(),
            });
            yield user.save();
            // Create a user object for the log
            const userLogEntry = {
                phoneNumber: user.phoneNumber,
                name: user.name,
                originalPassword: password_1.password,
                hashedPassword: hashedPassword,
            };
            userLog.push(userLogEntry);
        }));
        yield Promise.all(userSavingPromises); // Wait for all user saving promises to complete
        // Save the user log to the JSON file
        yield promises_1.default.writeFile('userGenerationLog.json', JSON.stringify(userLog, null, 2));
        console.log(`${count} random users generated and saved.`);
    }
    catch (error) {
        console.error('Error generating and saving users:', error);
    }
    finally {
        mongoose_1.default.disconnect(); // Disconnect from MongoDB after all operations
    }
});
const execute = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connectDb();
    generateRandomUsers(inputData_1.userArray.length); // Generate 10 random users
});
execute();
//# sourceMappingURL=generateActualUsers.js.map