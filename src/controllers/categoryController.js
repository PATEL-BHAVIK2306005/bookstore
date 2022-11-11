const {CategoryModel} = require("../models");
const {BookModel} = require("../models");
const loginService = require("../services/login")

const CategoryController = {
    findOne: async (req,res) => {
        const found = await CategoryModel.findOne({_id: req.params.name})
        res.json(found);
    },
    findMultiple: async (req,res) => {
        const found = await CategoryModel.find({_id: req.params.name})
        res.json(found);
    },
    list: async (req, res) =>{
        const allCategories = await CategoryModel.find()
        res.json(allCategories)
    },
    listNames: async (req, res) =>{
        const allCategories = await CategoryModel.find().select('_id')
        res.json(allCategories)
    },
    listAll: async () =>{
        const allCategories = await CategoryModel.find()
        return allCategories;
    },
    create: async(req, res) => {
        if (!(await loginService.isAdmin(req.session.username)))
            res.send({status:"Failed", error:"Admin Only"})
        else
        {
            const _id = req.body.name
            const url = req.body.url
            const check = await CategoryModel.exists({_id: _id})
            if (check)
            {
                res.send({status:"Failed", error:"object already exists"})
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
                res.send({status:"Failed", error:"Admin Only"})
        else
        {
            const nameDelete = req.body.name
            const output = await CategoryModel.deleteOne({_id: nameDelete})
            if (output.deletedCount == 1 ){
                res.send({status:"Success"})
            }
            else res.send({status:"Failed", error:"could not find object"})
        }
    },
        update: async(req, res) => {
            if (!(await loginService.isAdmin(req.session.username)))
                res.send({status:"Failed", error:"Admin Only"})
            else
            {
                const _id = req.body.currentName
                const newURL = req.body.newURL
                
                const output = await CategoryModel.findOneAndUpdate({_id: _id}, {
                    url: newURL
                })
                
                if (output !== null){
                    res.send({status:"Success"})
                }
                else res.send({status:"Failed", error:"could not find object"})
            }
    },
        getAllBooks: async(req, res) => {
            const books = await BookModel.find({category: req.params.category})
            res.json(books);
        },
}

module.exports = CategoryController