import mongoose, { Document } from 'mongoose';
export declare enum RsvpState {
    NotReplied = "not_replied",
    Undecided = "undecided",
    Arriving = "arriving",
    NotArriving = "not_arriving"
}
export interface RSVPData {
    attending: RsvpState;
    numberOfGuests: number;
}
interface User extends Document {
    phoneNumber: string;
    name: string;
    password: string;
    rsvp: RSVPData;
    admin?: boolean;
}
declare const _default: mongoose.Model<User, {}, {}, {}, mongoose.Document<unknown, {}, User> & User & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
