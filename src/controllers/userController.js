const {UserModel} = require("../models");

const UserController = {
    find: async (req,res) => {
        const found = await UserModel.find({name: req.params.name})
        res.json(found);
    },
    list: async (req, res) =>{
        const allUsers = await UserModel.find()
        res.json(allUsers);
    },
    create: async(req, res) => {
        const newUser = new UserModel(req.body)
        const saveUser = await newUser.save();
        res.json(saveUser);
    },
}

module.exports = UserController

//update
//delete