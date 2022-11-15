const {UserModel} = require("../models");

async function login(username, password) {
    const user = await UserModel.findOne({ username, password });
    if (user != null)
        return true
    return false
}
async function isAdmin(username) {
    if (username != null)
    {
        const user = await UserModel.findOne({username})
        if (user.role == "Administrator")
            return true
        else
            return false
    }
    else
        return false
}
async function isLoggedIn() { 
    if (req.session.username != null)
        return true
    else
        return false
}

module.exports = { login, isAdmin, isLoggedIn } // register }