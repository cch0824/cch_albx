// 上传文件的控制器
// 引入formidable模块
const formidable=require("formidable")
const path=require("path")

// 上传文件
exports.uploadFile=(req,res)=>{
  var obj=req.body
  // 使用formidable模块实现文件的上传操作
  // 1.创建文件上传对象
  var form =formidable.IncomingForm()
  // 2.设置编码类型：因为此模块不仅可以实现文件的上传，还可以实现不同参数的传递（键值对）
  form.encoding="utf-8"
  // 3.设置文件上传之后在服务器端存储的路径
  form.uploadDir=__dirname+"/../uploads"//???到时完善 
  // 4.设置保留文件扩展名
  form.keepExtensions=true
  // 5.实现文件上传操作
    // form.parse(请求报文对象,上传完成时的回调函数)
    // 回调函数中有三个参数：
    // 1.err:错误优先的回调函数--错误信息
    // 2.fields:字段：传递的普通键值对，它是一个对象
    // 3.files:这是文件上传成功后的相关信息--如存储信息
  form.parse(req,(err,fields,files) =>{
    if(err){
      res.json({
        code:404,
        msg:"上传文件失败"
      })
    }else{
      // path核心模块有一个basename方法可以获取当前path路径中最后一部分
      // console.log(files);
      var filename = path.basename(files.img.path)
      // console.log(filename)
      res.json({
        code:200,
        msg:"上传文件成功",
        img:filename
      })
    }
})
}