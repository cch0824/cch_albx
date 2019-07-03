


// 路由判断，修改文章页面的样式
$(function (){
  //通过调用common.js文件的方法获取当前页面的最后的/到?之间的路由
 let routerName=itcase.getRouterName(location.href);
 //文章菜单栏设置展开
  var menu_posts=$("#menu-posts")
 if(routerName=="posts"||routerName=="post-add"||routerName=="categories"){
  menu_posts.addClass("in").attr("aria-expanded",true)
 }
 //设置菜单同样设置
 var menu_settings=$("#menu-settings")
 if(routerName=="nav-menus"||routerName=="slides"||routerName=="settings"){
  menu_settings.addClass("in").attr("aria-expanded",true)
 }
 $("li").removeClass("active")
 $("#"+routerName).addClass("active")
})

