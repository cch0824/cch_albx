// 引入模块
const conn=require("./mysqlHelper")

// 用户登录
exports.login=(email,callback)=>{
  //查询邮箱是否存在
  // 如果存在result返回的是一个数组
  let sql =`select * from users where email='${email}'`
  conn.query(sql,(err,result)=>{
    if(err){
      callback(err)
    }else{
      callback(null,result[0])
    }
  })
}