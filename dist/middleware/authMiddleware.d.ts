import { Request, Response, NextFunction } from 'express';
export declare function authenticateUser(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export declare function authenticateAdmin(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
