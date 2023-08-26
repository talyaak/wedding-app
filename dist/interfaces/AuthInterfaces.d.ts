import { RSVPData } from "../models/userModel";
export interface LoginResponse {
    message: string;
    user?: UserWithoutSensitiveFields;
}
export interface ValidateResponse {
    isAuthenticated: boolean;
    user?: UserWithoutSensitiveFields;
}
export interface UserWithoutSensitiveFields {
    phoneNumber: string;
    name: string;
    rsvp: RSVPData;
    admin?: boolean;
}
