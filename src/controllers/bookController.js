const {BookModel} = require("../models");
const BookController = {
    find: async (req,res) => {
        const found = await BookModel.find({name: req.params.name})
        res.json(found);
    },
    list: async (req, res) =>{
        const allBooks = await BookModel.find()
        res.json(allBooks);
    },
    create: async(req, res) => {
        const newBook = new BookModel(req.body)
        const saveBook = await newBook.save();
        res.json(saveBook);
    }
}
module.exports = BookController
//update
//delete
//list
//search
