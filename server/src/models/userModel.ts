import mongoose, { Document, Schema } from 'mongoose';

export enum RsvpState {
    NotReplied = 'not_replied',
    Undecided = 'undecided',
    Arriving = 'arriving',
    NotArriving = 'not_arriving',
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

const userSchema = new Schema<User>({
    phoneNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    rsvp: {
        attending: { type: String, enum: Object.values(RsvpState), default: RsvpState.NotReplied },
        numberOfGuests: { type: Number, default: 0 },
    },
    admin: { type: Boolean, required: false },
});

export default mongoose.model<User>('User', userSchema);