const {BookModel} = require("../models");

const BookController = {
    find: async (req,res) => {
        const found = await BookModel.find({name: req.params.name})
        res.json(found)
    },
    list: async (req, res) =>{
        const allBooks = await BookModel.find()
        res.json(allBooks)
    },
    create: async(req, res) => {
        const name = req.body.name
        const cover = req.body.cover
        const relaseDate = req.body.releaseDate
        const price= req.body.price
        const quantity= req.body.quantity
        const author= req.body.author
        const category= req.body.category
        const book = new BookModel({
            name,
            cover,
            relaseDate,
            price,
            quantity,
            author,
            category,
          })

          book.save().then((data)=>{
            res.send(data)
          })
        },
        delete: async(req, res) => {
            const nameDelete = req.body.name
            const output = await BookModel.deleteOne({name: nameDelete})
            if (output.deletedCount == 1 ){
                res.json("deletion succesfull!")
            }
            else res.json("could not find object")
        },
        update: async(req, res) => {
            const currentName = req.body.currentName
            const newName = req.body.newName
            const newCover = req.body.newCover
            const newReleaseDate = req.body.newReleaseDate
            const newPrice = req.body.newPrice
            const newQuantity = req.body.newQuantity
            const output = await BookModel.findOneAndUpdate({name: currentName}, {
                name: newName,
                cover: newCover,
                releaseDate: newReleaseDate,
                price: newPrice,
                quantity: newQuantity
            })

            if (output !== null){
                res.json("update successfull!")
            }
            else res.json("could not find object")
        }
}

module.exports = BookController
//update
//delete