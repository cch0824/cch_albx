// 文章页面的控制器模块
 const postsModules =require("../modules/postsModules")
//
 exports.getPostList=(req,res)=>{
   //get 请求通过req.query来接收响应回来的数据
  let obj=req.query

  //调用数据模块的方法
 postsModules.getPostList(obj,(err,data)=>{   
  if(err)return res.json({
    code:404,
    msg:"数据获取失败"
  })
  res.json({
    code:200,
    msg:"数据获取成功",
    data:data
  })
 })
 }