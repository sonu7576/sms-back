const mongoose=require('mongoose')

const studentScheema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    department:{
        type:String,
        required:true
        
    },
    phone:{
        type:String,
        required:true
        
    },
    address:{
        type:String,
        required:true
        
    },
    place:{
        type:String,
        required:true
        
    }


})

 const students=mongoose.model('students',studentScheema)

 module.exports=students