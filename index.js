//import dotenv package
require ('dotenv').config()

require ('./DB/connection')

//import express
const express=require('express')

//import cors
const cors=require('cors')

const Router=require('./Routes/route')

//create server using express
const studentServer=express()

//use cors in server
studentServer.use(cors())

//parse json data in server
studentServer.use(express.json())

studentServer.use(Router)

//customize port
const PORT=4000||process.env.PORT

//run server application
studentServer.listen(PORT,()=>{
	console.log(`watch server started at port:${PORT}`);
	})
