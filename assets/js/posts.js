
// 获取文章页面的数据
$(function(){
  $.ajax({
    type:"get",
    url:"/getPostList",
    data:{
      pagenum:1,
      pagesize:2
    },
    dataType:"json",
    success:function(res){
      console.log(res)
      let html=template("postListTmp",res)
      $("tbody").html(html)
    }
  })
})