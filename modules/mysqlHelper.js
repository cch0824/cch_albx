// 封装mysql模块数据库的连接

//引入mysql模块
const mysql=require("mysql")

//创建数据库的连接
let conn=mysql.createConnection({
  host:"127.0.0.1",
  user:"root",
  password:"root",
  database:"baixiu",
  dateStrings:true
})
module.exports=conn