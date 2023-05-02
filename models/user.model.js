const { default: mongoose } = require("mongoose");

const UserSchema=new mongoose.Schema({
    fullName:{type:String,required:true,unique:false},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},

})
const UserModel=mongoose.model('user',UserSchema)
module.exports={UserModel}