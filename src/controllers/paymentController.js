const {PaymentModel} = require("../models");
const loginService = require("../services/login")

const PaymentController = {
    findOne: async (req,res) => {
        const found = await PaymentModel.findOne({_id: req.params.number})
        res.json(found);
    },
    findMultiple: async (req,res) => {
        const found = await PaymentModel.find({_id: req.params.number})
        res.json(found);
    },
    list: async (req, res) =>{
        const allPayments = await PaymentModel.find()
        res.json(allPayments)
    },
    create: async(req, res) => {
        if (!(await loginService.isAdmin(req.session.username)))
            res.send("Admin Only")
        else
        {
            const _id = req.body.number
            const check = await PaymentModel.exists({_id: _id})
            if (check)
            {
                res.json("Object already exists")
            }
            else{
                const creditNumber = req.body.creditNumber
                const amount= req.body.amount
                const customer = req.body.customer
                const books = req.body.books
                const warehouse = req.body.warehouse
                try{
                    const book = new BookModel({
                        _id,
                        creditNumber,
                        amount,
                        customer,
                        books,
                        warehouse,
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
        //////////////////////////////
        update: async(req, res) => {
            if (!(await loginService.isAdmin(req.session.username)))
                res.send("Admin Only")
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
}

module.exports = BookController