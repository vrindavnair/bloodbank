var mongoose=require('mongoose')

var Users=mongoose.model('Users',{
    username:{type:String},
    email:{type:String},
    mob:{type:String},
    pass:{type:String},
    cpass:{type:String},
    temp:{type:Number}

})
module.exports={Users}
