var express=require("express")
var router=express.Router()
var {mongoose}=require("../db")

var {signup}=require("../model/signup")
router.post("/post",(req,res)=>{
    var d=new signup({
        uname:req.body.uname,
        pass:req.body.pass,
       
    })
    d.save(function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})
module.exports=router