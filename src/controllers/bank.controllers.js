const express = require("express")
const BranchDetail = require("../models/branch.model")
const MasterAccount = require("../models/master.model")
const FixedAccount = require("../models/fixed.model")
const router = express.Router();




router.post("/Branchdetail", async (req, res) => {
    try{
        const createBranch = await BranchDetail.create(req.body);
        return res.status(201).send(createBranch);
     }
    catch(e){
        console.log(e.message)
    }
})




router.get("/Branchdetail", async (req, res) => {
    try{
        const createBranch = await BranchDetail.find().lean().exec();
        return res.status(201).send(createBranch);
     }
    catch(e){
        console.log(e.message)
    }
})



router.post("/masterAccount", async (req, res) => {
    try{
        const createAccount = await MasterAccount.create(req.body);
        return res.status(201).send(createAccount);
     }
    catch(e){
        console.log(e.message)
    }
})



router.get("/masterAccount", async (req, res) => {
    try{
        const masterAccount = await MasterAccount.find().lean().exec();
        return res.status(201).send(masterAccount);
     }
    catch(e){
        console.log(e.message)
    }
})




router.post("/fixedAccount", async (req, res) => {
    try{
        const createAccount = await FixedAccount.create(req.body);
        const master = await MasterAccount.findByIdAndUpdate(req.body.master_id, 

            {$inc : 
            {balance : req.body.balance}},
            {new : true})
        return res.status(201).send(createAccount);
     }
    catch(e){
        console.log(e.message)
    }
})



router.delete("/fixedAccount/:id", async(req, res) => {
    try{
       const fixedAccount = await FixedAccount.findByIdAndDelete(req.params.id).lean().exec();

       const master = await MasterAccount.findByIdAndUpdate
       (fixedAccount.master_id, {$inc : {balance : -fixedAccount.balance}}, {new : true})


       

       const currentdate = new Date()


       const diffTime1 = Math.abs(currentdate.getMilliseconds() - fixedAccount.startDate)
       const diffday1 = Math.ceil(diffTime1/(24*60*60*1000))

       const interestEarned = Math.floor(diffday1*fixedAccount.interestRate*fixedAccount.balance/36500)

      
       
       
            let fine = 0;

            const diffTime2 = Math.abs(fixedAccount.maturityDate - currentdate)

            const diffday2 = Math.ceil(diffTime2/(24*60*60*1000))

            fine = Math.floor((fixedAccount.balance*diffday2*2)/36500);


       const TotalInterest = interestEarned - fine;

       const TotalAmount = TotalInterest + fixedAccount.balance;


       const response = {

           finalAmount : TotalAmount
       }

       return res.json(response)
     }
    catch(e){

        console.log(e.message)
    }
})


module.exports = router;