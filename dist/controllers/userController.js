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
exports.getAllUsersData = exports.updateUserRSVP = exports.getUserRSVP = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
function getUserRSVP(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userModel_1.default.findById(userId);
            if (!user)
                throw new Error();
            return user.rsvp;
        }
        catch (error) {
            throw new Error('Error fetching user RSVP data');
        }
    });
}
exports.getUserRSVP = getUserRSVP;
function updateUserRSVP(userId, updatedRSVP) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userModel_1.default.findByIdAndUpdate(userId, { rsvp: updatedRSVP }, { new: true });
            return !!user;
        }
        catch (error) {
            throw new Error('Error updating user RSVP data');
        }
    });
}
exports.updateUserRSVP = updateUserRSVP;
function getAllUsersData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield userModel_1.default.find({}, '-password'); // Exclude password field
            const transformedResponse = users.map((user) => ({
                phoneNumber: user.phoneNumber,
                name: user.name,
                rsvp: user.rsvp,
            }));
            return transformedResponse;
        }
        catch (error) {
            throw new Error('Error fetching all user data');
        }
    });
}
exports.getAllUsersData = getAllUsersData;
//# sourceMappingURL=userController.js.map