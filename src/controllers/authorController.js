const {AuthorModel} = require("../models");
const {BookModel} = require("../models");
const loginService = require("../services/login")

const AuthorController = {
    find: async (req,res) => {
        const found = await AuthorModel.find({_id: req.params.name})
        res.json(found);
    },
    list: async (req, res) =>{
        const allAuthors = await AuthorModel.find()
        res.json(allAuthors);
    },
    create: async(req, res) => {
        if (!(await loginService.isAdmin(req.session.username)))
            res.send("Admin Only")
        else
        {
            const _id = req.body.name
            const check = await AuthorModel.exists({_id: _id})
            if (check)
            {
                res.json("Object already exists")
            }
            else{
                const age = req.body.age
                const bio = req.body.bio
                const picture = req.body.picture
                const author = new AuthorModel({
                    _id,
                    age,
                    bio,
                    picture
                })

                author.save().then((data)=>{
                    res.send(data)
                })
                }
        }
    },
    getAllBooks: async(req, res) => {
        const books = await BookModel.find({author: req.params.author})
        res.json(books);
    },
    delete: async(req, res) => {
        if (!(await loginService.isAdmin(req.session.username)))
            res.send("Admin Only")
        else
        {
            const nameDelete = req.body.name
            const output = await AuthorModel.deleteOne({_id: nameDelete})
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
            const currentName = req.body.currentName
            const newName = req.body.newName
            const newAge = req.body.newAge
            const newBio = req.body.newBio
            const newPicture = req.body.newPicture
            const newAuthor = req.body.newAuthor

            const output = await AuthorModel.findOneAndUpdate({_id: currentName}, {
                name: newName,
                age: newAge,
                bio: newBio,
                picture: newPicture,
                author: newAuthor
            })

            if (output !== null){
                res.json("update successfull!")
            }
            else res.json("could not find object")
        }
    },
}

module.exports = AuthorController
