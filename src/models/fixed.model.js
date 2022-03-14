const mongoose = require("mongoose");


const fixedAccountSchema = mongoose.Schema({
    account_number : {type : Number, required : true, unique : true},
    balance : {type : Number, required : true},
    interestRate : {type : Number, required : true},
    startDate : {type : Date, required : true},
    maturityDate : {type : Date, required : true},
    master_id : {type : mongoose.Schema.Types.ObjectId, ref : "MasterAccount"}

   
}, {
    versionKey : false,
    timestamps : true,
})

module.exports = mongoose.model("FixedAccount",fixedAccountSchema)