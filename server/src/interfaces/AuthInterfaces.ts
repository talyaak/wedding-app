import { RSVPData } from "../models/userModel";

export interface LoginResponse {
    message: string;
    user?: UserWithoutSensitiveFields; // Optional user information
}

export interface ValidateResponse {
    isAuthenticated: boolean;
    user?: UserWithoutSensitiveFields; // Optional user information
}

export interface UserWithoutSensitiveFields {
    phoneNumber: string;
    name: string;
    rsvp: RSVPData;
}