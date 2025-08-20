import express from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';  

const app = express();

app.post("/signup",(req,res)=>{

})

app.post("/signin",(req,res)=>{
    const userId =1;
    
     const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        token
    });
})

app.post("/room", middleware  ,(req,res)=>{
    
})

app.listen(3001);
console.log('HTTP Backend is running on port 3000');
