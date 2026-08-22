import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export interface AuthRequest extends Request {
    user?: any;
}

export const security = (request: AuthRequest, response: Response, next: NextFunction) => {
    const authHeader = request.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return response.status(401).json({
            message: "Unauthorized"
        });
    }
    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET;

    if (!secret) {
        return response.status(500).json({
            message: "Server error"
        });
    }

    try {
        const decoded = jwt.verify(token, secret);
        request.user = decoded;
        next();
    } catch (error) {
        return response.status(403).json({
            message: "Invalid token"
        });
    }
};