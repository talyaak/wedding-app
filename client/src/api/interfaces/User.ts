import { RSVPData } from "./RSVPData";

export interface User {
    phoneNumber?: string;
    name?: string;
    password?: string;
    rsvp?: RSVPData;
    admin?: boolean;
}