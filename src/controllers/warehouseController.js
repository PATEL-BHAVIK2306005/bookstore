const {WarehouseModel} = require("../models");

const WarehouseController = {
    find: async (req,res) => {
        const found = await WarehouseModel.find({coordinates: req.params.coordinates})
        res.json(found)
    },
    list: async (req, res) =>{
        const allWares = await WarehouseModel.find()
        res.json(allWares)
    },
    create: async(req, res) => {
        const coordinates = req.body.coordinates
        const city = req.body.city
        const address = req.body.address
        const size = req.body.size
        const warehouse = new WarehouseModel({
            coordinates,
            city,
            address,
            size,
          })

          warehouse.save().then((data)=>{
            res.send(data)
          })
        },
        delete: async(req, res) => {
            const coordinatesDelete = req.body.coordinates
            const output = await WarehouseModel.deleteOne({coordinates: coordinatesDelete})
            if (output.deletedCount == 1 ){
                res.json("deletion succesfull!")
            }
            else res.json("could not find object")
        },
        update: async(req, res) => {
            const currentCoordinates = req.body.currentCoordinates
            const newCity = req.body.newCity
            const newAddress = req.body.newAddress
            const newCoordinates = req.body.newCoordinates
            const newSize = req.body.newSize
            const output = await WarehouseModel.findOneAndUpdate({coordinates: currentCoordinates}, {
                coordinates: newCoordinates,
                city: newCity,
                address: newAddress,
                size: newSize
            })
            
            if (output !== null){
                res.json("update successfull!")
            }
            else res.json("could not find object")
        }
    }

module.exports = WarehouseController