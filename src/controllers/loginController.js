
/// This is all temp, will be merged into user controller

const loginService = require("../services/login")
const {UserModel} = require("../models");

const loginController = {

loginForm: async (req, res) => { res.render("login", {}) }, ////// Not Checked

registerForm: async (req, res) => { res.render("register", {}) },

}
module.exports = loginController