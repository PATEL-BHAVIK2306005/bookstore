const {CategoryModel} = require("../models");
const {BookModel} = require("../models");
const loginService = require("../services/login")

const CategoryController = {
    find: async (req,res) => {
        const found = await CategoryModel.find({_id: req.params.name})
        res.json(found)
    },
    list: async (req, res) =>{
        const allCategories = await CategoryModel.find()
        res.json(allCategories)
    },
    create: async(req, res) => {
        if (!(await loginService.isAdmin(req.session.username)))
                res.send("Admin Only")
        else
        {
            const _id = req.body.name
            const url = req.body.url
            const check = await CategoryModel.exists({_id: _id})
            if (check)
            {
                res.json("Object already exists")
            }
            else
            {
                const category = new CategoryModel({
                _id,
                url
            })
            category.save().then((data)=>{
                res.send(data)
            })
            }
        }
    },
        delete: async(req, res) => {
            if (!(await loginService.isAdmin(req.session.username)))
                res.send("Admin Only")
        else
        {
            const nameDelete = req.body.name
            const output = await CategoryModel.deleteOne({_id: nameDelete})
            if (output.deletedCount == 1 ){
                res.json("deletion succesfull!")
            }
            else res.json("could not find object")
        }
    },
        update: async(req, res) => {
            if (!(await loginService.isAdmin(req.session.username)))
                res.send("Admin Only")
            else
            {
                const currentName = req.body.currentName
                const newName = req.body.newName
                const newURL = req.body.newURL
                
                const output = await CategoryModel.findOneAndUpdate({_id: currentName}, {
                    _id: newName,
                    url: newURL
                })
                
                if (output !== null){
                    res.json("update successfull!")
                }
                else res.json("could not find object")
            }
    },
        getAllBooks: async(req, res) => {
            const books = await BookModel.find({category: req.params.category})
            res.json(books);
        },
}

module.exports = CategoryController