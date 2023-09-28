var mongoose=require('mongoose')
var contact=mongoose.model('contact',{
    lname:{type:String},
    email:{type:String},
    mob:{type:String},
    mesg:{type:String}
})
module.exports={contact}