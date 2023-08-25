import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/userModel';
import { generateJwtToken } from '../utils/jwt';
import RequestWithBody from '../interfaces/RequestWithBody';

interface LoginRequest {
    phoneNumber: string;
    password: string;
}
export async function loginUser(req: RequestWithBody<LoginRequest>, res: Response): Promise<void> {
    try {
        const phoneNumber = req.body.phoneNumber;
        const password = req.body.password;

        const user = await User.findOne({ phoneNumber });
        if (!user || !bcrypt.compareSync(password, user.password)) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const token = generateJwtToken(user._id.toString());

        res.cookie('token', token, {
            httpOnly: true,
            // secure: true, // Enable this in production with HTTPS
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function logoutUser(req: Request, res: Response): Promise<void> {
    try {
        // Clear the authentication cookie by setting an empty cookie with the same name and options
        res.clearCookie('token', {
            httpOnly: true,
            // secure: true, // Enable this in production with HTTPS
            sameSite: 'strict',
            maxAge: 0, // Set the maxAge to 0 to immediately expire the cookie
        });

        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error logging out:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}