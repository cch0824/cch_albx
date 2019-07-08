// 引入模块
const express = require("express");
const session = require("express-session");
const router = require("./router/indexRouter");
const ejs = require("ejs");
const bodyParser = require("body-parser");
// 创建实例对象
const app = express();
// console.log(bodyParser);

//监听
app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
//设置ejs默认模板引擎
app.set("view engine", "ejs");
app.set("views", "views");
//添加body-parser配置
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 让app中间件使用session的方式来进行状态保持
app.use(
  session({
    ///这里的name值得是cookie的name，默认cookie的name是：connect.sid
    //name: 'hhw'
    // 对session加密：加盐，设置一个只有你自己知道的字符串
    // md5加密有空了解
    secret: "加密字符串，写什么都可以",
    //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
    resave: false,
    //强制“未初始化”的会话保存到存储。      
    saveUninitialized: false
  })
);
//托管静态资源
app.use("/assets", express.static("assets"));
app.use("/uploads", express.static("uploads"));

// 下面的中间件，每次请求都会访问到
// 我们要在访问后台页面的时候，需要先判断用户是否登陆过，如果登陆过就进行请求的处理，如果没有登陆过就重定向到登陆页面
app.use((req, res, next) => {
  if (
    (req.session.logined && req.session.logined == "true") ||
    req.url.indexOf("/admin") == -1 ||
    req.url == "/admin/login"
  ) {
    // next：执行之前用户的请求操作\
    next();
  } else {
    // 重定向到登录页面
    res.redirect("/admin/login");
  }
});

//添加路由配置
app.use(router);
