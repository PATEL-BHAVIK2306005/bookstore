const {BookModel} = require("../models");
const loginService = require("../services/login")

const BookController = {
    findOne: async (req,res) => {
        const found = await BookModel.findOne({_id: req.params.name})
        res.json(found)
    },
    search: async (req,res) => {
        const result = await BookModel.find({
            "$and": [
                { _id: { '$regex': ".*"+req.query.name+".*", $options: 'i'} }, 
                { author: { '$regex': ".*"+req.query.author+".*", $options: 'i'} },
                { category: { '$regex': ".*"+req.query.category+".*", $options: 'i'} },
            ]
        })
        res.json(result)
    },
    list: async (req, res) =>{
        const allBooks = await BookModel.find()
        res.json(allBooks)
    },
    create: async(req, res) => {
        if (!(await loginService.isAdmin(req.session.username)))
            res.send("Admin Only")
        else
        {
            const _id = req.body.name
            const check = await BookModel.exists({_id: _id})
            if (check)
            {
                res.json("Object already exists")
            }
            else{
                const length = req.body.length
                const cover = req.body.cover
                const summary = req.body.summary
                const relaseDate = req.body.releaseDate
                const price= req.body.price
                const quantity= req.body.quantity
                const author= req.body.author
                const category= req.body.category
                try{
                    const book = new BookModel({
                        _id,
                        length,
                        cover,
                        relaseDate,
                        price,
                        quantity,
                        author,
                        category,
                        summary
                    })

                    book.save().then((data)=>{
                        res.send(data)
                    })
                }
                catch(e){
                    res.json(_id)
                 }
                }
        }   
        },
        delete: async(req, res) => {
            if (!(await loginService.isAdmin(req.session.username)))
                res.send("Admin Only")
            else
            {
                const nameDelete = req.body.name
                const output = await BookModel.deleteOne({_id: nameDelete})
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
                id = req.body.id
                const check = await BookModel.exists({_id: id})
                if (!check)
                {
                    res.json("Book does not exist")
                }
                else
                {
                    const currentName = req.body.currentName
                    const newName = req.body.newName
                    const newLength = req.body.newLength
                    const newCover = req.body.newCover
                    const newSummary = req.body.newSummary
                    const newReleaseDate = req.body.newReleaseDate
                    const newPrice = req.body.newPrice
                    const newQuantity = req.body.newQuantity
                    const output = await BookModel.findOneAndUpdate({_id: currentName}, {
                        name: newName,
                        length: newLength,
                        cover: newCover,
                        summary: newSummary,
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
        },
        updateQuantity: async(req, res) => {
            if (!(await loginService.isLoggedIn(req.session.username)))
                res.send("Must be logged in to purchase")
            else
                {
                    const id = req.body.name
                    const check = await BookModel.exists({_id: id})
                    if (!check)
                    {
                        res.json("Book does not exist")
                    }
                    else
                    {
                        const quantity = await BookModel.findOne({_id: id})
                        const newQuantity = quantity - 1
                        const output = await BookModel.findOneAndUpdate({_id: id}, {
                            quantity: newQuantity
                        })
    
                        if (output !== null){
                            res.json("update successfull!")
                        }
                        else res.json("could not find object")
                  
        }}}
}

module.exports = BookController