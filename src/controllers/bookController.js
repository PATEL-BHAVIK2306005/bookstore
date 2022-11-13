const {BookModel} = require("../models");
const loginService = require("../services/login")

const BookController = {
    findOne: async (req,res) => {
        const found = await BookModel.findOne({_id: req.params.name})
        res.json(found)
    },
    search: async (req,res) => {
        const price = req.body.price
        const name =req.body.name
        if (!(name))
        {
            const result = await BookModel.find({
                price: { $lte: price },
                "$and": [
                    { _id: { '$regex': req.body.firstLetterBook+".*", $options: 'i'} }, 
                    { author: { '$regex': ".*"+req.body.author+".*", $options: 'i'} },
                    { category: { '$regex': ".*"+req.body.genre+".*", $options: 'i'} },
                ]
            })
            res.json(result)
        }
        else
        {
            const result = await BookModel.find({
                price: { $lte: price },
                "$and": [
                    { _id: { '$regex': ".*"+req.body.name+".*", $options: 'i'} }, 
                    { author: { '$regex': ".*"+req.body.author+".*", $options: 'i'} },
                    { category: { '$regex': ".*"+req.body.genre+".*", $options: 'i'} },
                ]
            })
            res.json(result)
        }
    },
    /*searchByName: async (req,res) => {
        const result = await BookModel.find({
            price: { $lte: price },
            "$and": [
                { _id: { '$regex': ".*"+req.body.name+".*", $options: 'i'} }, 
                { author: { '$regex': ".*"+req.body.author+".*", $options: 'i'} },
                { category: { '$regex': ".*"+req.body.category+".*", $options: 'i'} },
            ]
        })
        res.json(result)
    },*/
    list: async (req, res) =>{
        const allBooks = await BookModel.find()
        res.json(allBooks)
    },
    create: async(req, res) => {
        if (!(await loginService.isAdmin(req.session.username)))
            res.send({status:"Failed", error:"Admin only!"})
        else
        {
            const _id = req.body.name
            const check = await BookModel.exists({_id: _id})
            if (check)
            {
                res.send({status:"Failed", error:"object already exists"})
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
                    res.send({status:"Failed", error:"could not create object"})
                 }
                }
        }   
        },
        delete: async(req, res) => {
            if (!(await loginService.isAdmin(req.session.username)))
                res.send({status:"Failed", error:"Admin only!"})
            else
            {
                const nameDelete = req.body.name
                const output = await BookModel.deleteOne({_id: nameDelete})
                if (output.deletedCount == 1 ){
                    res.json({status:"Success"})
                }
                else res.send({status:"Failed", error:"could not find object"})
            }
        },
        update: async(req, res) => {
            if (!(await loginService.isAdmin(req.session.username)))
                res.send({status:"Failed", error:"Admin only!"})
            else
            {
                const _id = req.body.name
                const check = await BookModel.exists({_id: _id})
                if (!check)
                {
                    res.send({status:"Failed", error:"could not find object"})
                }
                else
                {
                    const book = await BookModel.findOne({_id: _id})
                    let newLength = req.body.newLength
                    if (!(newLength))
                        newLength = book.length

                    let newCover = req.body.newCover
                    if (!(newCover))
                        newCover = book.cover

                    let newSummary = req.body.newSummary
                    if (!(newSummary))
                        newSummary = book.summary

                    let newReleaseDate = req.body.newReleaseDate
                    if (!(newReleaseDate))
                        newReleaseDate = book.relaseDate

                    let newPrice = req.body.newPrice
                    if (!(newPrice))
                        newPrice = book.price

                    let newQuantity = req.body.newQuantity
                    if (!(newQuantity))
                        newQuantity = book.quantity
                    
                    let newCategory = req.body.newCategory
                    if (!(newCategory))
                        newQuantity = book.quantity
                    
                    let newAuthor = req.body.newAuthor
                    if (!(newAuthor))
                        newAuthor = book.author

                    const output = await BookModel.findOneAndUpdate({_id: _id}, {
                        length: newLength,
                        cover: newCover,
                        summary: newSummary,
                        releaseDate: newReleaseDate,
                        price: newPrice,
                        quantity: newQuantity,
                        category: newCategory,
                        author: newAuthor
                    })

                    if (output !== null){
                        res.json({status:"Success"})
                    }
                    else res.send({status:"Failed", error:"could not find object"})
                }
            }
        },
        updateQuantity: async(req, res) => {
            if (!(await loginService.isLoggedIn(req.session.username)))
                res.send({status:"Failed", error:"Please login!"})
            else
                {
                    const id = req.body.name
                    const check = await BookModel.exists({_id: id})
                    if (!check)
                    {
                        res.send({status:"Failed", error:"could not find object"})
                    }
                    else
                    {
                        const quantity = await BookModel.findOne({_id: id})
                        const newQuantity = quantity - 1
                        const output = await BookModel.findOneAndUpdate({_id: id}, {
                            quantity: newQuantity
                        })
    
                        if (output !== null){
                            res.json({status:"Success"})
                        }
                        else res.send({status:"Failed", error:"could not find object"})
                  
        }}}
}

module.exports = BookController