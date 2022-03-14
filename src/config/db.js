
const mongoose = require("mongoose");

const connect = ()=>{

    return mongoose.connect("mongodb+srv://khushi890:khushi890@cluster0.cvht7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.exports = connect;
