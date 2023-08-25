import jwt, { VerifyErrors, JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secret = process.env.JWT_SECRET as string;

interface DecodedToken extends JwtPayload {
    userId: string;
}

export function generateJwtToken(userId: string): string {
    return jwt.sign({ userId }, secret, { expiresIn: '7d' });
}

export function verifyJwtToken(token: string): string | null {
    try {
        const decoded = jwt.verify(token, secret) as DecodedToken;
        return decoded.userId;
    } catch (error) {
        const jwtError = error as VerifyErrors; // Explicit type assertion
        // Handle different types of errors
        if (jwtError.name === 'TokenExpiredError') {
            // Handle expired token error
            console.error('Token expired:', jwtError.message);
        } else if (jwtError.name === 'JsonWebTokenError') {
            // Handle invalid token error
            console.error('Invalid token:', jwtError.message);
        } else {
            // Handle other errors
            console.error('JWT verification error:', jwtError);
        }
        return null;
    }
}
