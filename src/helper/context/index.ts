import { verify } from 'jsonwebtoken';

export const verifyUser = async (req: any) => {
    try {
        req.email = null;
        const barrerHeader = req.headers.authorization;
        if (barrerHeader) {
            const token = barrerHeader.split(' ')[1];
            const payload: any = verify(token, 'secretKey')
            req.email = payload.email;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}
