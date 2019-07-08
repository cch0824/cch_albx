// 文章页面的控制器模块
 const postsModules =require("../modules/postsModules")

//获取所有文章数据
 exports.getPostList=(req,res)=>{
   //get 请求通过req.query来接收响应回来的数据
  let obj=req.query
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

// 新增文章
exports.addPost=(req,res)=>{
  // post请求用req.body接收参数
  var obj=req.body
  obj.views=0;
  obj.likes=0;
  // console.log(obj);
  postsModules.addPost(obj,(err)=>{
    if(err){
      // console.log(err);
      res.json({
        code:404,
        msg:"新增文章失败"
      })
    }else{
      res.json({
        code:200,
        msg:"新增文章成功"
      })
    }
  })
}