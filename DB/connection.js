const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log('student server connected successfully to mongodb atlas');
}).catch((err)=>{
    console.log(`mong db connection failed error:${err}`);

})