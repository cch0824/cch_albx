// 新增文章的前台业务处理
$(function(){

  //加载所有分类数据
  $.ajax({
    url: "/getAllCateList",
    type: "get",
    dataType:"json",
    success: function(res) {
      //生成分类数据的动态结构
      var html = '';
      for (let i = 0; i < res.data.length; i++) {
        html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`;
      }
      $("#category").html(html);
    }
  })
  // 文件上传
  // 为上传文件注册change事件
  $("#feature").on("change", function() {
    // 使用.files可以获取所有当前被选择的文件的对象，是一个数组，每个被选择的文件对象就是里面的对象
    // 1.获取当前被选择的文件对象
    // 2.创建formdata对象
    var formdata =new FormData() 
    var imgfiles= document.querySelector("#feature").files[0]
    formdata.append("img",imgfiles)
    // console.log(formdata);
    $.ajax({
      type:"post",
      url:"/uploadFile",
      processData:false,
      contentType:false,
      dataType:"json",
      data:formdata,
      success:(res)=>{
        if(res.code==200){
          // 显示图片并设置图片路径
          $(".thumbnail").attr('src','/uploads/'+res.img).show()
          $("[name=feature]").val(res.img)
        }
     }
   })
  })
   // 初始化富文本框：创建一个富文本框覆盖住原来的指定id号对应的的textarea的文本框
  CKEDITOR.replace('content');

  // 新增文章
  $(".btnsave").on("click", function(event) {
    event.preventDefault();
    // 同步数据：将富文本框中的数据与textarea中的数据进行同步---两者同步后数据会一样
    // CKEditor.instances.id号.updateElement():同步数据，可以直接使用$().serialize()来获取文本域的数据
    CKEDITOR.instances.content.updateElement()
    // serialize:获取当前所有拥有name属性的value值
    // $(".row").serialize()
    $.ajax({
      type:"post",
      url:"/addPost",
      dataType:"json",
      data:$(".row").serialize(),
      success:(res)=>{
        // console.log(res);
        if(res.code==200){
          $(".alert-danger>strong").text("新增文章成功")
          $(".alert-danger>span").text(res.msg)
          $(".alert-danger").show()
          setTimeout(() => {
            location.href="/admin/posts"
          }, 3000);
        }
      }
    })
  })
})