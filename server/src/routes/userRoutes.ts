import express, { Request, Response } from 'express';
import { authenticateUser } from '../middleware/authMiddleware';

import { getUserRSVP, updateUserRSVP } from '../controllers/userController'; // Create these functions
import { RSVPData } from '../models/userModel';

const router = express.Router();

// Protected route for fetching user's RSVP data
router.get('/rsvp', authenticateUser, async (req: Request, res: Response) => {
    try {
        const userId = req.userId as string;
        const userRSVP = await getUserRSVP(userId);

        if (!userRSVP) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.json({ userRSVP });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Protected route for updating user's RSVP data
router.put('/rsvp', authenticateUser, async (req: Request, res: Response) => {
    try {
        const userId = req.userId as string;
        const updatedRSVP: RSVPData = req.body;

        const success = await updateUserRSVP(userId, updatedRSVP);

        if (!success) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.json({ message: 'RSVP updated successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
