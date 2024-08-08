const express=require('express')

const studentController=require('../controllers/studentControl')

const user =require('../controllers/userControl')

const router=new express.Router()




// add student
router.post('/add/student',studentController.Addstudent)


// get
router.get('/get/students',studentController.getAllstudents)

// edit student

router.put('/edit/:id',studentController.editStudent)

// remove

router.delete('/remove/:id',studentController.removeStudent)


// sign up 

router.post('/register',user.registerController)

// sign in

router.post('/login',user.loginController)












module.exports=router


