const {AuthorModel} = require("../models");
const {BookModel} = require("../models");

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
        const name = req.body.name
        const author = new AuthorModel({
            name,
          })

          author.save().then((data)=>{
            res.send(data)
          })
        },
    getAllBooks: async(req, res) => {
        const books = await BookModel.find({author: req.params.author})
        res.json(books);
    },
}

module.exports = AuthorController

