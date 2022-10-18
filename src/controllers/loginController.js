const loginService = require("../services/login")

const loginController = {
 isLoggedIn: async (req, res, next) => {
  if (req.session.username != null)
    return next()
  else
    res.redirect('/login')
 },
 foo: async (req, res) => {  
  res.render("foo", {username: req.session.username})
 },

loginForm: async (req, res) => { res.render("login", {}) },

registerForm: async (req, res) => { res.render("register", {}) },

logout: async (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
},

login: async (req, res) => {
  const { username, password } = req.body

  const result = await loginService.login(username, password)
  if (result) {
    req.session.username = username
    res.redirect('/')
  }
  else
    res.redirect('/login?error=1')
},

register: async (req, res) => {
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