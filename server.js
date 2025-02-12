
const express=require("express");
const app=express();

app.get("",(req,res)=>{
    res.json("hey");
})

app.listen(prompt,()=>{
    console.log(`server is running on the ${PORT}`);
});