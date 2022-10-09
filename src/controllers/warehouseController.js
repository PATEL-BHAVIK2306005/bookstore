const {WarehouseModel} = require("../models");

const WarehouseController = {
    find: async (req,res) => {
        const found = await WarehouseModel.find({address: req.params.address})
        res.json(found);
    },
    list: async (req, res) =>{
        const allWarehouses = await WarehouseModel.find()
        res.json(allWarehouses);
    },
    create: async(req, res) => {
        const newWarehouse = new WarehouseModel(req.body)
        const saveWarehouse = await newWarehouse.save();
        res.json(saveWarehouse);
    }
}

module.exports = WarehouseController

//update
//delete