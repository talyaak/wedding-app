import { Request, Response, NextFunction } from 'express';
import { verifyJwtToken } from '../utils/jwt';
import User from '../models/userModel';

export function authenticateUser(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }

    const userId = verifyJwtToken(token);

    if (!userId) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    req.userId = userId;
    next();
}

export async function authenticateAdmin(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }

    const userId = verifyJwtToken(token);

    if (!userId) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    req.userId = userId;

    const user = await User.findById(req.userId);
    if (!user) throw new Error('User not found');

    if (user.admin !== true) {
        return res.status(401).json({ message: 'Permission denied' });
    }

    next();
}