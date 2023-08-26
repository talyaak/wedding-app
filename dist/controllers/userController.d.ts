import { UserWithoutSensitiveFields } from '../interfaces/AuthInterfaces';
import { RSVPData } from '../models/userModel';
export declare function getUserRSVP(userId: string): Promise<RSVPData | null>;
export declare function updateUserRSVP(userId: string, updatedRSVP: RSVPData): Promise<boolean>;
export declare function getAllUsersData(): Promise<UserWithoutSensitiveFields[]>;
