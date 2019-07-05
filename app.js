// 引入模块
const express=require("express");
const router=require("./router/indexRouter")
const ejs=require("ejs")
const bodyParser=require("body-parser")
// 创建实例对象
const app= express();
// console.log(bodyParser);

//监听
app.listen(3000,()=>{
  console.log("http://127.0.0.1:3000");
})
//设置ejs默认模板引擎
app.set("view engine","ejs")
app.set("views","views")
//添加body-parser配置
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//托管静态资源
app.use("/assets",express.static("assets"))
app.use("/uploads",express.static("uploads"))

//添加路由配置
app.use(router)