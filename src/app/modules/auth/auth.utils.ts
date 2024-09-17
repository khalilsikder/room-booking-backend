// import jwt, { JwtPayload } from 'jsonwebtoken';

export const createToken = (
  jwtPayload: {
    sign(jwtPayload: { userId: string; role: string; }, secret: string, arg2: { expiresIn: string; }): unknown; userId: string; role: string 
},
  secret: string,
  expiresIn: string,
) => {
  return jwtPayload.sign(jwtPayload, secret, {
    expiresIn,
  });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};