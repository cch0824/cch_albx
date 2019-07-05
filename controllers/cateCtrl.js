
// 这个文件用来实现分类数据的用户请求的响应
let cateModules=require("../modules/cateModules")
exports.getAllCateList=(req,res)=>{
  cateModules.getAllCateList((err,data)=>{
    console.log(data);
    
    let obj=res.query;
    if(err)return res.json({
      code:404,
      msg:"数据查询失败"
    })
    res.json({
      code:200,
      msg:"数据查询成功",
      data:data
    })
  })
}