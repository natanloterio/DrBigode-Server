import * as dotenv from 'dotenv'

dotenv.config({
    path: process.env.NODE_ENV === "prod" ? ".env.production" : ".env.development"
});

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    APP_NAME: process.env.APP_NAME
}