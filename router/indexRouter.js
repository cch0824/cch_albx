//页面路由模块

//引入模块
const express=require("express")
//创建路由对象
const router=express.Router()
//引入控制器模块
const pagesCtrl=require("../controllers/pagesController")
const postsCtrl=require("../controllers/postsController")
const cateCtrl=require("../controllers/cateCtrl")
const userCtrl=require("../controllers/userCtrl")
const uploadCtrl=require("../controllers/uploadCtrl")


//前台页面
router.get("/",pagesCtrl.getIndexPage)
.get("/detail",pagesCtrl.getDetailPage)
.get("/list",pagesCtrl.getListPage)
//后台管理页面
.get("/admin",pagesCtrl.getAdminPage)
.get("/admin/categories",pagesCtrl.getCategoriesPage)
.get("/admin/comments",pagesCtrl.getCommentsPage)
.get("/admin/login",pagesCtrl.getLoginPage)
.get("/admin/nav-menus",pagesCtrl.getNavMenusPage)
.get("/admin/password-reset",pagesCtrl.getPasswordResetPage)
.get("/admin/post-add",pagesCtrl.getPostAddPage)
.get("/admin/posts",pagesCtrl.getPostsPage)
.get("/admin/settings",pagesCtrl.getSettingsPage)
.get("/admin/slides",pagesCtrl.getSlidesPage)
.get("/admin/users",pagesCtrl.getUsersPage)


// 业务处理
//获取所有文章数据
.get("/getPostList",postsCtrl.getPostList)
.get("/delPostById",postsCtrl.delPostById)
.post("/addPost",postsCtrl.addPost)


//获取筛选后分类数据
.get("/getAllCateList",cateCtrl.getAllCateList)

// 上传文件
.post("/uploadFile",uploadCtrl.uploadFile)

// 用户登录
.post("/login",userCtrl.login)


//暴露路由模块
module.exports=router