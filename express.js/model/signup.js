var mongoose=require('mongoose')
var signup=mongoose.model('signup',{
    uname:{type:String},
    pass:{type:String},
  
})
module.exports={signup}