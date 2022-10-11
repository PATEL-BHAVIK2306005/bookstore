const {BookModel} = require("../models");

const BookController = {
    find: async (req,res) => {
        const found = await BookModel.find({name: req.params.address})
        res.json(found)
    },
    list: async (req, res) =>{
        const allBooks = await BookModel.find()
        res.json(allBooks)
    },
    create: async(req, res) => {
        const newBook = new BookModel(req.body)
        const saveBook = await newBook.save()
        res.json(saveBook)
    },
    delete: async(req, res) => {
        BookModel.findByIdAndRemove(book_id, function (err, book) {
            if (err){
                res.json("Couldn't find book")
            }
            else{
                res.json("Removed book : ", book)
            }
        });
    },
    update: async(req, res) => {
        const book = await BookModel.find({name: req.params.name})
    }
}

module.exports = BookController
//update
//delete