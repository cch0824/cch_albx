// 文章页面的数据处理模块

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

// 
exports.getPostList=(params,callback)=>{
  let sql=`select posts.id,posts.slug,posts.title,posts.feature,posts.created,posts.content,posts.status,users.id,users.nickname,categories.name
  from posts
  inner join users on posts.user_id = users.id
  inner join categories on posts.category_id = categories.id
  limit ${(params.pagenum-1)*params.pagesize},${params.pagesize}`;
  conn.query(sql,(err,result)=>{
    if(err)return callback(err)
    callback(null,result)
  })
}