import userModel, { RSVPData } from '../models/userModel';

export async function getUserRSVP(userId: string): Promise<RSVPData | null> {
    try {
        const user = await userModel.findById(userId);
        if (!user) throw new Error();
        return user.rsvp;
    } catch (error) {
        throw new Error('Error fetching user RSVP data');
    }
}

export async function updateUserRSVP(userId: string, updatedRSVP: RSVPData): Promise<boolean> {
    try {
        const user = await userModel.findByIdAndUpdate(
            userId,
            { rsvp: updatedRSVP },
            { new: true }
        );

        return !!user;
    } catch (error) {
        throw new Error('Error updating user RSVP data');
    }
}
