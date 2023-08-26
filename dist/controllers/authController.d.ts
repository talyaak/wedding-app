import { Request, Response } from 'express';
import RequestWithBody from '../interfaces/RequestWithBody';
interface LoginRequest {
    phoneNumber: string;
    password: string;
}
export declare function loginUser(req: RequestWithBody<LoginRequest>, res: Response): Promise<void>;
export declare function logoutUser(req: Request, res: Response): Promise<void>;
export declare function validateUser(req: Request, res: Response): Promise<void>;
export {};
