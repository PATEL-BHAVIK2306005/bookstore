const {PaymentModel} = require("../models");
const {BookModel} = require("../models");
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
                const payment = new PaymentModel({
                    _id,
                    creditNumber,
                    amount,
                    customer,
                    books,
                    warehouse,
                })

                payment.save().then((data)=>{
                    res.send(data)
                })
            }
            catch(e){
                res.json(_id)
                }
            }
        },
        delete: async(req, res) => { //////////////////////////////////// check
            if (!(await loginService.isAdmin(req.session.username)))
                res.send("Admin Only")
            else
            {
                const nameDelete = req.body.number
                const output = await PaymentModel.deleteOne({_id: nameDelete})
                if (output.deletedCount == 1 ){
                    res.json("deletion succesfull!")
                }
                else res.json("could not find object")
            }
        },
        ////////////////////////////// check
        update: async(req, res) => {
            if (!(await loginService.isAdmin(req.session.username)))
                res.send("Admin Only")
            else
            {
                const _id = req.body.number
                const newCreditNumber = req.body.newCreditNumber
                const newDate = req.body.newDate
                const newAmount = req.body.newAmount
                const newUsername = req.body.Username
                // update cart and payment?
                
                const output = await PaymentModel.findOneAndUpdate({_id}, {
                    creditNumber: newCreditNumber,
                    date: newDate,
                    amount: newAmount,
                    username: newUsername,
                })

                if (output !== null){
                    res.json({status:"Success"})
                }
                else res.json({status:"Failed, error: could not find object"})
            }
        },
        add: async(req, res) => {
            if (typeof req.session.username == 'undefined')
                res.json({status:"Failed, error: not logged in"})
            else
            {
            const _id = req.body.book
            const user = req.session.username
            const check = await BookModel.exists({_id})
            if (!check)
            {
                res.json({status:"Failed, error: book doesn't exist"})
            }
            else
            {
                const output = await PaymentModel.updateOne({user}, {
                    $push: { cart: _id} 
                })

                if (output !== null){
                    res.json({status:"Success"})
                }
                else  res.json({status:"Failed, error: couldn't find cart"})
            }
        }
        },
}

module.exports = PaymentController