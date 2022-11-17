// used for environmental variables

require('dotenv').config();

const SESS_LIFETIME = 1000 * 60 * 60 * 24 * 7; // 7 days using this for cookies later
const CONNECTION_STRING = "mongodb+srv://Galaxor:6HfUAvf8t8FS2Suh@cluster0.vzltvty.mongodb.net/?retryWrites=true&w=majority";
const API_KEY = "GFwgw4AKhkgJMfFubrCM3z5IK"
const API_SECRET = "igzSNjjZUIpH24YqCjz5McA7KJIowY3p4AB4dQ7kpcX7EPuw01"
const ACCESS_TOKEN = "1592434079449989123-z3XnEQPphVTFluOjEQBj2InwJ7Id7I"
const ACCESS_TOKEN_SECRET = "BDuUbH8h4Kwxeibboiza0mMUdWqDd5bL3wtN1xtWfV0po"


module.exports =  {
    sessionLifetime: SESS_LIFETIME,
    db: CONNECTION_STRING,
    API_KEY,
    API_SECRET,
    ACCESS_TOKEN,
    ACCESS_TOKEN_SECRET,
};