const {AuthorModel} = require("../models");
const AuthorController = {
    find: async (req,res) => {
        const found = await AuthorModel.find({name: req.params.name})
        res.json(found);
    },
    list: async (req, res) =>{
        const allBooks = await AuthorModel.find()
        res.json(allBooks);
    },
    create: async(req, res) => {
        const newAuthor= new AuthorModel(req.body)
        const saveAuthor = await newAuthor.save();
        res.json(saveAuthor);
    },
    getAllBooks: async(req, res) => {
        const books = await AuthorModel.find({name:req.params.name}).populate("books")
        res.json(books);
    },
}
module.exports = AuthorController

