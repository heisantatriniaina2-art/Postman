import { createToken } from '../security/jwt';

const authenticateUser = async (credentials: { username: string; password: string }) => {
    if (credentials.username !== "admin" || credentials.password !== "1234") {
        throw new Error("Invalid username or password");
    }

    const userData = {
        username: credentials.username,
        role: "ADMIN"
    };

    const token = createToken(userData);

    return {
        message: "Authentication successful",
        token: token
    };
};

export {
    authenticateUser
};