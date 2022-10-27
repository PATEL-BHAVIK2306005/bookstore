const {RoleModel} = require("../models");
const {UserModel} = require("../models");
const loginService = require("../services/login")

const RoleController = {
    find: async (req,res) => {
        const found = await RoleModel.find({_id: req.params.name})
        res.json(found);
    },
    list: async (req, res) =>{
        const allRoles = await RoleModel.find()
        res.json(allRoles);
    },
    getAllAdmins: async(req, res) => {
      if (!(await loginService.isAdmin(req.session.username)))
                res.send("Admin Only")
        else
        {
        const admins = await UserModel.find({role: "admin"})
        res.json(admins);
        }
    },
    getAllCustomers: async(req, res) => {
      if (!(await loginService.isAdmin(req.session.username)))
          res.send("Admin Only")
      else
        {
          const customers = await UserModel.find({role: "customer"})
          res.json(customers);
        }
    },
    create: async(req, res) => { ////////need to check if duplicate
      if (!(await loginService.isAdmin(req.session.username)))
          res.send("Admin Only")
      else
        {
        const _id = req.body.name
        const description = req.body.description
        const role = new RoleModel({
            _id,
            description
          })

          role.save().then((data)=>{
            res.json(data)
          })
        }
      },
    delete: async(req, res) => {
      if (!(await loginService.isAdmin(req.session.username)))
          res.send("Admin Only")
      else
        {
          const nameDelete = req.body.name
          const output = await RoleModel.deleteOne({_id: nameDelete})
          if (output.deletedCount == 1 )
              res.json("deletion succesfull!")
          else
            res.json("could not find object")
        }
      },
    update: async(req, res) => {
      if (!(await loginService.isAdmin(req.session.username)))
          res.send("Admin Only")
      else
        {
          const currentName = req.body.currentName
          const newDescription = req.body.newAge

          const output = await RoleModel.findOneAndUpdate({_id: currentName}, {
              description: newDescription,
          })

          if (output !== null){
              res.json("update successfull!")
          }
          else res.json("could not find object")
        }

    },
}
module.exports = RoleController