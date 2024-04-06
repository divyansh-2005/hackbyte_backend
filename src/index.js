const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv");
const cors = require("cors")
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const victimRouter = require("./routes/victimRouter");


dotenv.config();
// console.log("SECRET_KEY:",process.env.SECRET_KEY);
// console.log("Mongo_URL:", process.env.MONGO_URL);



app.use(express.json())
app.use(cors())

// Middleware to parse JSON bodies
app.use(bodyParser.json());
// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users',userRouter)
app.use('/victim',victimRouter)



app.get("/",(req,res)=>{
    res.send("API")
})



mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    
    console.log("connected to mongodb");

    app.listen(PORT,()=>{
        console.log("Server started on port "+PORT);
    })
    
})
.catch((error)=>{
    console.error("mongodb error:",error);
})


