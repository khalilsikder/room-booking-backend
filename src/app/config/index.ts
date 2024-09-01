import dotenv from 'dotenv'
import path from 'path';
dotenv.config({path:path.join((process.cwd(),'.env'))})


export default {
NODE_ENV:process.env.NODE_ENV,
port:process.env.PORT,
database_url:process.env.URL_PASSWORD,
salt_round:process.env.BRCIPT_SALT_ROUNDS,
jwt_access_token:process.env.JWT_ACCESS_SECRET,
jwt_refresh_token:process.env.JWT_REFRESH_SECRET
}