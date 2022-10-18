const {UserModel} = require("../models");

async function login(username, password) {
    const user = await UserModel.findOne({ _id: username, password });
    return user != null
}

/*async function register(_id, password) {

    const user = new User({
        _id,
        password
    });

    await user.save()        
}
*/
module.exports = { login } // register }