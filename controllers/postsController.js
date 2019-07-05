// 文章页面的控制器模块
 const postsModules =require("../modules/postsModules")
//
 exports.getPostList=(req,res)=>{
   //get 请求通过req.query来接收响应回来的数据
  let obj=req.query
  console.log(obj);
  
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

//  根据文章id删除文章数据
exports.delPostById=(req,res)=>{
  console.log(req.query);
    var id=req.query.id
    postsModules.delPostById(id,(err)=>{
    
    if(err){
      res.json({
        code:404,
        msg:"删除数据失败"
      })
    }else{
      res.json({
        code:200,
        msg:"删除数据成功"
      })
    }
  })
  
}