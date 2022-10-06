// used for environmental variables

require('dotenv').config();

const SESS_LIFETIME = 1000 * 60 * 60 * 24 * 7; // 7 days using this for cookies later
const CONNECTION_STRING = "mongodb+srv://Galaxor:6HfUAvf8t8FS2Suh@cluster0.vzltvty.mongodb.net/?retryWrites=true&w=majority";


module.exports =  {
    sessionLifetime: SESS_LIFETIME,
    db: CONNECTION_STRING
};