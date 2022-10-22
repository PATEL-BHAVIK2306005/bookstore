const {UserModel} = require("../models");
const loginService = require("../services/login")

const UserController = {
    find: async (req,res) => {
        const found = await UserModel.find({_id: req.params.name})
        res.json(found);
    },
    list: async (req, res) =>{
        const allUsers = await UserModel.find()
        res.json(allUsers);
    },
    create: async(req, res) => {
        const _id = req.body.username
        const check = await UserModel.exists({_id: _id})
        if (check)
        {
            res.json("Object already exists")
        }
        else{
            const password = req.body.password
            const email = req.body.email
            const role = req.body.role
            const user = new UserModel({
                _id,
                password,
                email,
                role
            })

            user.save().then((data)=>{
                res.send(data)
            })
            }
        },
    delete: async(req, res) => {
        const nameDelete = req.body.name
        const output = await UserModel.deleteOne({name: nameDelete})
        if (output.deletedCount == 1 ){
            res.json("deletion succesfull!")
       }
        else res.json("could not find object")
      },
    update: async(req, res) => {
        const name = req.body.name
        const newEmail = req.body.newEmail
        const newPassword = req.body.newPassword
        const newRole = req.body.newRole
        const output = await UserModel.findOneAndUpdate({_id: name}, {
            email: newEmail,
            password: newPassword,
            role: newRole,
        })

        if (output !== null){
            res.json("update successfull!")
        }
        else res.json("could not find object")
    },
    login: async(req, res) => {
        const username = req.body.username 
        const password = req.body.password
        const result = await loginService.login(username, password)
        if (result) {
            req.session.username = username
            res.redirect('/')
        }
        else
            res.redirect('/login?error=1') ///// need to create
        
    },
    isLoggedIn: async (req, res, next) => { ////// Not Checked
        if (req.session.username != null)
          return next()
        else
          res.redirect('/login')
    },
    isAdmin: async (req, res, next) => { ////// Not Checked
        if (!await loginService.isAdmin(req.session.username))
            res.json("Admin Only!")
        else
            return next()
    },
    foo: async (req, res) => {  /// WTF
        res.json(req.session.username)
       },
}


module.exports = UserController