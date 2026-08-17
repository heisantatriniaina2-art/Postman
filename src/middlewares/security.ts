import { Request, Response, NextFunction } from "express";

export const security = (request: Request, response: Response, next: NextFunction) => {
    const authorized = request.headers['authorization'];

    if (!authorized || authorized !== "Bearer MySecretToken") {
        return response.status(401).json({
            message: "No authorized"
        });
    }

    next();
};