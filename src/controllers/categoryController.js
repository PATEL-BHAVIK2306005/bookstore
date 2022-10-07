const {CategoryModel} = require("../models");

const CategoryController = {
    find: async (req,res) => {
        const found = await CategoryModel.find({name: req.params.name})
        res.json(found);
    },
    list: async (req, res) =>{
        const allBooks = await CategoryModel.find()
        res.json(allCategories);
    },
    create: async(req, res) => {
        const newCategory = new CategoryModel(req.body)
        const saveCategory = await newCategory.save();
        res.json(saveCategory);
    }
}

module.exports = CategoryController

//update
//delete