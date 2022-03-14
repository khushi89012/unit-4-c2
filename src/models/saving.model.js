const mongoose = require("mongoose");


const savingSchema = mongoose.Schema({
    
    account_number: {type : Number, required : true},
    balance: {type:Number,required:true},
    interestrate: {type:Number,required:true}
   
}, {
    versionKey : false,
    timestamps : true,
})

module.exports = mongoose.model("SavingAccount", branchDetailSchema)