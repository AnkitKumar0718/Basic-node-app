const express=require('express');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200);
    res.send("BASIC-NODE-APP")
})

app.get('/change',(req,res)=>{
    res.status(200);
    res.send("Changes made")
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})