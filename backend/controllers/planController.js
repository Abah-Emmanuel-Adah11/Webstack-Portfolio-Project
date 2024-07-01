const planModel = require('../models/planModel')

module.exports.getplan = async (req, res) => {
    const plan = await planModel.find()
    res.send(plan)
}

module.exports.saveplan = async (req, res) => {

    const { text } = req.body

    planModel
        .create({text})
        .then((data) => {
            console.log("Added successfully...");
            console.log(data);
            res.send(data)
        })
}

module.exports.updateplan = async (req, res) => {
    const {_id, text} = req.body
    planModel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Updated Successfully...."))
    .catch((err) => console.log(err))
}

module.exports.deleteplan = async (req, res) => {
    const {_id} = req.body
    planModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfully...."))
    .catch((err) => console.log(err))
}