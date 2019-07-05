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

// 数据的筛选
// - 主要是判断用户有没有传入筛选的条件
// - 如果有就进行筛选条件的拼接
// - 重点细节：查询语句的关键字有严格的顺序要求：select from [inner join .... on] where [group by] having  [order by] limit

// 获取所有文章数据
exports.getPostList=(params,callback)=>{
  let sql=`select posts.id pid,posts.slug,posts.title,posts.feature,posts.created,posts.content,posts.status,users.id uid,users.nickname,categories.name
  from posts
  inner join users on posts.user_id = users.id
  inner join categories on posts.category_id = categories.id
  where 1=1 `
  if(params.cate){
    sql+=` and posts.category_id = ${params.cate} `
  }
  if(params.statu){
    sql+=` and posts.status = '${params.statu}' `
  }
 sql+= ` order by posts.id desc limit ${(params.pagenum-1)*params.pagesize},${params.pagesize}`;
  conn.query(sql,(err,result)=>{
    if(err){
      callback(err)
    }else{
      sql='select count(*) cnt from posts'
      conn.query(sql,(err2,data2)=>{
        if(err2){
          callback(err2)
        }else{
          // console.log(data2[0]);
         callback(null,{result:result,total:data2[0].cnt})
        }
      })
     
    }
    
  })
}

//根据id删除文章数据
exports.delPostById=(id,callback)=>{
  let sql='delete from posts where id = '+id
  conn.query(sql,(err,result)=>{
    if(err){
      callback(err)
    }else{
      callback(null)
    }
  })
}