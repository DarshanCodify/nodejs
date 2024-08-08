const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
{
    name:{
        type:String,
        required:[true,'name is required'],
    },
    email:{
        type:String,
        required:[true,'name is required'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'password is required'],
    },
    isadmin:{
        type:Boolean,
        default:false,
    },
},    
{timestamps:true}
);

const user = mongoose.model('user', userSchema)

module.exports = user;