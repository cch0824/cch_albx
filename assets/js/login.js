// 用户登录
$(function (){
  // 登录按钮注册点击事件
  $(".btnLogin").on("click",function (){
    // console.log(111);
    let email=$('[name="email"]').val();
    let password=$('[name="password"]').val();
    // 发起请求
      $.ajax({
      type:"post",
      url:"/login",
      datatype:"json",
      data:$(".loginform").serialize(),
      beforeSend:function(){
        if(!(/\w+[@]\w+[.]\w+/).test(email)){
          $(".alert>span").text("邮箱输入不合法")
          $(".alert").fadeIn(500).delay(2000).fadeOut(500);
          return false
        }
        //判断
        if(password.trim().length==0){
          $(".alert>span").text("请输入密码")
          $(".alert").fadeIn(500).delay(2000).fadeOut(500);
          return false
        }
      },
      success:(res)=>{
        if(res.code==200){
          location.href="/admin"
        }else{
          $(".alert>span").text(res.msg)
          $(".alert").fadeIn(500).delay(2000).fadeOut(500);
        }
      }
    })
  })
})
