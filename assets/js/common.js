//专门用于封装

// 获取路由的函数封装
let itcase = {
  getRouterName:(href)=> {
    var index = href.indexOf("?");
    let routerName = "";
    if (index == -1) {
      routerName = href.substring(href.lastIndexOf("/") + 1);
    } else {
      routerName = href.substring(href.lastIndexOf("/") + 1, href.indexOf("?"));
    }
    return routerName;
  }
};
