import { Request, Response } from "express";
import * as authService from '../services/authService';

export const login = async (request: Request, response: Response) => {
    try {
        const result = await authService.authenticateUser(request.body);
        return response.status(200).json(result);
    } catch (error: any) {
        return response.status(401).json({ message: error.message });
    }
};