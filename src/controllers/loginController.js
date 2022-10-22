
/// This is all temp, will be merged into user controller

const loginService = require("../services/login")
const {UserModel} = require("../models");

const loginController = {
 isLoggedIn: async (req, res, next) => { ////// Not Checked
  if (req.session.username != null)
    return next()
  else
    res.redirect('/login')
 },
 isAdmin: async (req, res, next) => { ////// Not Checked
  if (req.session.username != null)
    if (await UserModel.find({_id: req.session.name}).role == "Administrator")
      return next()
  else
    res.send('Admin only!')
 },
 foo: async (req, res) => {  /// WTF
  res.render("foo", {username: req.session.username})
 },

loginForm: async (req, res) => { res.render("login", {}) }, ////// Not Checked

registerForm: async (req, res) => { res.render("register", {}) },

logout: async (req, res) => { // Not Checked
  req.session.destroy(() => {
    res.redirect('/login');
  });
},

login: async (req, res) => { //Checked
  const { username, password } = req.body

  const result = await loginService.login(username, password)
  if (result) {
    req.session.username = username
    res.redirect('/')
  }
  else
    res.redirect('/login?error=1')
},

register: async (req, res) => { ////// Not Checked
  const { username, password } = req.body

  try {
    await loginService.register(username, password)    
    req.session.username = username
    res.redirect('/')
  }
  catch (e) { 
    res.redirect('/register?error=1')
  }    
},
}
module.exports = loginController