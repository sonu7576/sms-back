const mongoose=require('mongoose')

const userScheema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
        
    },
   


})

 const users=mongoose.model('users',userScheema)

 module.exports=users