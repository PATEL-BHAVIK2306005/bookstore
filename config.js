// used for environmental variables

import dotenv from 'dotenv';

dotenv.config();

const SESS_LIFETIME = 1000 * 60 * 60 * 24 * 7; // 7 days using this for cookies later

export {
    SESS_LIFETIME,
};