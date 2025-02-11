require('dotenv').config();
import express from "express";
import cors from 'cors';
const app = express();

//IMPORTS

import studentRouter from "./routes/students.routes";




//MIDDLEWARES
app.use(cors());
app.use(express.json());


//ROUTES
app.use("/api/v1/students",studentRouter);

app.get("/",(req,res)=>{
    res.json({
        Message: "Welcome to Regestration Form api",
        version:"1.0.0",
        dev:"Gyanaranjan Patra"
    })
})

app.listen(process.env.PORT || 3001,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT || 3001}`)
})