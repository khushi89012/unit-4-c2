const express = require("express");
const { use } = require("express/lib/application");

const mongoose = require("mongoose");
const connect = require("./config/db")
// const usermodel = require("./models/user.models")
// const branchmodel = require("./models/branch.model")
// const fixedmodel = require("./models/fixed.model")
// const savingmodel = require("./models/saving.model")
// const mastermodel = require("./models/master.model")

const usercontroller = require("./controllers/user.controller")
const bankcontroller = require("./controllers/user.controller")



const app = express();
app.use(express.json());



app.use("/user",usercontroller)
app.use("/bank",bankcontroller)



app.listen(5900,()=>{
  connect()
console.log("I am listening on port 5900")   


})








