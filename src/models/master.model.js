const mongoose = require("mongoose");


const masterAccountSchema = mongoose.Schema({
    balance : {type : Number, required : true},
    user_id : {type : mongoose.Schema.Types.ObjectId, ref : "User", required : true},
    manager_id : {type : mongoose.Schema.Types.ObjectId, ref : "User"},
    branch_id : {type : mongoose.Schema.Types.ObjectId, ref : "BranchDetail"}
   
}, {
    versionKey : false,
    timestamps : true,
})

module.exports = mongoose.model("MasterAccount", masterAccountSchema)