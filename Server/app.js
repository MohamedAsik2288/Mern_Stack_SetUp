const  express =require('express');
const mongoose =require('mongoose');
const morgan =require('morgan');
const cors =require('cors');
require("dotenv").config();

// Import app
const app =express()


//db
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("MongoDB Connected")).catch((err)=> console.log(`MongoDB Connected but it shows error ${err}`))


//middleware
app.use(morgan("dev"));
app.use(cors({orgin:true,credentials:true}));

//router
const testRouter = require('./routes/test')
app.use('/',testRouter);


//port
const port =8080;

//listening
app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`);
})



