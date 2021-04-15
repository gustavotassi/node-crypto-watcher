import * as dotenv from 'dotenv';
dotenv.config();

const config = process.env;

export default {
    port: config.SERVER_PORT ?? 3031,
    balance: config.BALANCE ?? 0,
    crypto: config.API_CRYPTO ?? 'undefined',
    currency: config.API_CURRENCY ?? 'undefined',
    apiKey: config.API_KEY ?? 'undefined',
    apiInterval: config.API_INTERVAL ?? 30000
};
