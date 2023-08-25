export enum RsvpState {
    Undecided = 'undecided',
    Arriving = 'arriving',
    NotArriving = 'not_arriving',
}

export interface RSVPData {
    attending: RsvpState;
    numberOfGuests: number;
}