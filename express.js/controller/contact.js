var express=require("express")
var router=express.Router()
var {mongoose}=require("../db")

var {contact}=require("../model/contact")
router.post("/post",(req,res)=>{
    var dd=new contact({
        lname:req.body.lname,
        email:req.body.email,
        mob:req.body.mob,
        mesg:req.body.mesg,
    })
    dd.save(function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})
module.exports=router