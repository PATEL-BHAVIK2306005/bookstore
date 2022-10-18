const {RoleModel} = require("../models");
const {UserModel} = require("../models");

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
      const admins = await UserModel.find({role: "admin"})
      res.json(admins);
    },
    getAllCustomers: async(req, res) => {
      const customers = await UserModel.find({role: "customer"})
      res.json(customers);
    },
    create: async(req, res) => {
      const name = req.body.name
      const description = req.body.description
      const role = new RoleModel({
          name,
          description,
        })

        role.save().then((data)=>{
          res.send(data)
        })
      },
    delete: async(req, res) => {
        const nameDelete = req.body.name
        const output = await RoleModel.deleteOne({_id: nameDelete})
        if (output.deletedCount == 1 ){
            res.json("deletion succesfull!")
       }
        else res.json("could not find object")
      },
    update: async(req, res) => {
        const currentName = req.body.currentName
        const newDescription = req.body.newAge

        const output = await RoleModel.findOneAndUpdate({_id: currentName}, {
            description: newDescription,
        })

        if (output !== null){
            res.json("update successfull!")
        }
        else res.json("could not find object")
    },
}
module.exports = RoleController