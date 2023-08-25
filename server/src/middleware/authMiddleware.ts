import { Request, Response, NextFunction } from 'express';
import { verifyJwtToken } from '../utils/jwt';

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