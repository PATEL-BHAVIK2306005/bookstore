const {UserModel} = require("../models");
const {PaymentModel} = require("../models");
const loginService = require("../services/login")
math = require("mathjs")

const UserController = {
    findOne: async (req,res) => {
        const found = await UserModel.findOne({username: req.params.username})
        res.json(found);
    },
    findMultiple: async (req,res) => {
        const found = await UserModel.find({username: req.params.username})
        res.json(found);
    },
    create: async(req, res) => {
        const _id = req.body.email
        const check = await UserModel.exists({_id: _id})
        if (check)
        {
            res.send({status:"Failed", error:"Admin Only"})
        }
        else{
            const password = req.body.password
            const username = req.body.username
            const role = req.body.role
            const address = req.body.address
            const user = new UserModel({
                _id,
                password,
                username,
                address,
                role
            })
            // now we create an empty payment placeholder for the user
            const id = math.floor(Math.random() * 1000 + 1)
            const payment = new PaymentModel({
                _id: id,
                username
            })
            await payment.save()
            await user.save().then((data)=>{
                res.send(data)
            })
            }
        },
    delete: async(req, res) => {
        const nameDelete = req.body.email
        const output = await UserModel.deleteOne({_id: nameDelete})
        if (output.deletedCount == 1 ){
            res.json({status:"Success"})
       }
        else res.json("could not find object")
      },
    update: async(req, res) => {
        const email = req.body.email
        const newUsername = req.body.newUsername
        const newPassword = req.body.newPassword
        const newRole = req.body.newRole
        const output = await UserModel.findOneAndUpdate({_id: email},{
            username:newUsername,
            password: newPassword,
            role: newRole,
        })

        if (output !== null){
            res.json({status:"Success"})
        }
        else res.json("could not find object")
    },
    changePassword: async(req, res) => {
        const id = req.session.username
        const newPassword = req.body.newPassword
        const oldPassword = req.body.oldPassword
        const output = await UserModel.findOneAndUpdate({_id: id,password:oldPassword}, {
            password: newPassword,
        })

        if (output !== null){
            res.json({status:"Success"})
        }
        else res.json({status:"Failed"})
    },
    login: async(req, res) => {
        const username = req.body.username 
        const password = req.body.password
        const result = await loginService.login(username, password)
        if (result) {
            req.session.username = username
            res.json({status:"Success"})
        }
        else
        {
            res.json({status:"Failed",error:"username or password incorrect"})
        }
        
    },
    isLoggedIn: async (req, res, next) => { // Checked
        console.log(req.session.username)
        if (!(await loginService.isAdmin(req.session.username)))
            res.redirect('/login');
        else
            res.json({status:"Success"})
    },
    isAdmin: async (req, res, next) => { /// Checked
        if (!(await loginService.isAdmin(req.session.username)))
            res.send({status:"Failed", error:"Admin Only"})
        else
            res.json({status:"Success"})
    },
    logout: async (req, res) => { // Checked
        req.session.destroy(() => {
          res.redirect('/login');
        });
      },
}


module.exports = UserController