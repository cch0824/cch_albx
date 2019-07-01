const express=require("express");
const app= express();
const fs=require("fs")
app.listen(3000,()=>{
  console.log("127.0.0.1:3000");
})
app.get("/",(req,res)=>{
fs.readFile(__diename+"/views/index.html",(err,data)=>{
  if(err) return res.end(err.message);
  res.end(data)
})
})

