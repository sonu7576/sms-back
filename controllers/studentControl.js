const students = require("../models/studentScheema")





// add student

exports.Addstudent=async(req,res)=>{
    const {name, email, department, phone, address, place}=req.body
    try{
        const studentDetails=await students.findOne({email})

        if (studentDetails) {

            res.status(406).json('user already exists')
            
        } else {

            const newstudent=new students({
                name, email, department, phone, address, place
            })

            await newstudent.save()
            res.status(200).json(newstudent)
            
        }
    }

    catch(err){
        res.status(401).json(err)
    }
}


// get all student

exports.getAllstudents=async(req,res)=>{

    const search=req.query.search

    const query={
        name:{$regex:search,$options:"i"},
        
    }
    

    try{
        const getAllstudents = await students.find(query)
        res.status(200).json(getAllstudents)
    }catch(err){
        res.status(401).json(err)
    }


}

// edit

exports.editStudent=async(req,res)=>{
    const{id}=req.params

    const {name, email, department, phone, address, place } = req.body

    try{

        const edit=await students.findByIdAndUpdate({_id:id},{
            name, email, department, phone, address, place
        },{new:true})
        await edit.save()
        res.status(200).json(edit)

    }catch(err){
        res.status(401).json(err)
    }






}


// remove student 


exports.removeStudent=async(req,res)=>{

    const {id}=req.params

    try{
        const remove = await students.findByIdAndDelete({_id:id})
        res.status(200).json(remove)
    }catch(err){
        res.status(401).json(err)
    }


}