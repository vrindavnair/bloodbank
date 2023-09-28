var express=require("express")
var router=express.Router() //connecting server and contoller
var {mongoose}=require("../db")
var {Users}=require("../model/reglog")
router.get("/",(req,res)=>{
    Users.find((err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            res.send(err)
        }
    })

})
router.post("/post",(req,res)=>{
    var dd=new Users({
        username:req.body.username,
        email:req.body.email,
        mob:req.body.mob,
        pass:req.body.pass,
        cpass:req.body.cpass,
        temp:1

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
router.post("/postp",(req,res)=>{
    console.log("test2")
    var dd=new Users({
        username:req.body.username,
        email:req.body.email,
        mob:req.body.mob,
        pass:req.body.pass,
        cpass:req.body.cpass,
        temp:2

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
router.post("/signup",(req,res)=>{
    var username=req.body.username
    var pass=req.body.pass
    Users.find(
        {
            $and:[{username:username},{pass:pass}]
        },
    (err,docs)=>{
        if(!err){
            a=docs
            dd=a[0].temp
            data=JSON.stringify(dd)
            res.send(data)
        }
        else{
            res.send(err)
        }
    }
    )
})
module.exports=router