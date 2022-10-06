const {BookModel} = require("../models")
const BookController = {
    find: async (req,res) => {
        const found = await BookModel.find({name: req.params.name})
        res.json(found);
    }
}
module.exports = BookController
//update
//delete
//list
//search
