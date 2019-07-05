
// 初始化文章数据
$(function() {
  var pagenum = 1; //当前页码
  var pagesize = 3; //每页显示的数据数量
  //调用请求所有文章数据
  init({});

  // 实现用户数据的筛选
  // 筛选按钮添加点击事件
  $(".btn-search").on("click", function(event) {
    event.preventDefault()
    let query={}
    // 判断用户有没选择指定的筛选
    if($(".cateSelector").val()!="all"){
      query.cate= $(".cateSelector").val()
    }
    if($(".statuSelector").val()!="all"){
      query.statu= $(".statuSelector").val()
    }
    init(query)   
  });

    //使用自调用函数实现分类数据的加载
    (function() {
      $.ajax({
        url: "/getAllCateList",
        type: "get",
        success: function(res) {
          
          // console.log(res);
          //生成分类数据的动态结构
          let html = '<option value="all">所有分类</option>';
          for (let i = 0; i < res.data.length; i++) {
            html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`;
          }
          $(".cateSelector").html(html);
        }
      });
    }
  )();

  // 初始化刷新文章数据
  function init(query) {
    $.ajax({
      type: "get",
      url: "/getPostList",
      data: {
        pagenum: pagenum,
        pagesize: pagesize,
        ...query
      },
      dataType: "json",
      success: function(res) {
        // console.log(res);
        let html = template("postListTmp", res.data);
        $("tbody").html(html);
        //调用分页结构来实现分页
        //总页数=数据总数量/每页显示数量
        setPage(Math.ceil(res.data.total / pagesize));
      }
    });
  }

  //实现分页
  function setPage(count) {
    $(".pagination").bootstrapPaginator({
      // 分页插件的基本使用
      // - 引入的文件
      //   - js文件
      // - 重点参数的说明
      //   - bootstrapMajorVersion：标记所使用的bootstrap的版本，如果是3.*,那么分页结构就以必须使用ul来进行包裹，如果是2.**，那么分页结构就必须使用div包裹，默认值为2
      //   - currentPage：设置当前页，可以为当前页码添加样式
      //   - totalPages：总页数，我们必须设置一个正确的总页数
      // - 重点事件的说明
      //   - onPageClicked：单击页码之后触发的处理事件，它有四个参数：event，originalEvent，type，page
      bootstrapMajorVersion: 3,
      currentPage: pagenum,
      totalPages: count,

      //点击页码函数
      onPageClicked: function(event, originalEvent, type, page) {
        pagenum = page;
        //重新根据页码刷新文章数据
        init({});
      }
    });
  }
});

//实现点击删除数据
$("tbody").on("click",".btnDel",function (){
  if(window.confirm("请确认是否删除数据")){
  // 通过自定义属性的值获取id
  let id=$(this).data("id")
  $.ajax({
    type:"get",
    url:"/delPostById",
    data:{id:id},
    success:function(res){
     console.log(res)
    }
  })
 }
})