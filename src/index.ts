require('dotenv').config();
import express from "express";
import cors from 'cors';




const app = express();


app.use(cors());
app.use(express.json());

app.get("/home",(req,res)=>{
    res.json({
        message: "Hello World"
    })
})

app.listen(process.env.PORT || 3001,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT || 3001}`)
})