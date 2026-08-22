import jwt from 'jsonwebtoken';

export const createToken = (userData: object): string => {
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
        throw new Error("JWT_SECRET environment variable is not defined");
    }
    return jwt.sign(userData, secretKey, { expiresIn: '24h' });
};

export const verifyToken = (token: string) => {
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
        throw new Error("JWT_SECRET environment variable is not defined");
    }
    return jwt.verify(token, secretKey);
};