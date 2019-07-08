const userModules = require("../modules/userModules");

exports.login = (req, res) => {
  let obj = req.body;
  // console.log(obj);
  userModules.login(obj.email, (err, data) => {
    if (err) {
      res.json({
        code: 404,
        msg: "服务器异常"
      });
    } else {
      //是否获取到data数据，即sql语句查询的结果是否存在
      // 验证邮箱是否存在
      if (data) {
        //验证密码是否正确
        if (data.password == obj.password) {
          // 以session的方式进行状态保持
          // req.session写入数据，可以存对象
          req.session.logined="true";
          //将当前用户对象存储到session中
          req.session.currentUser=data;
 
          res.json({
            code: 200,
            msg: "登录成功"
          });
        } else {
          res.json({
            code: 300,
            msg: "密码错误"
          });
        }
      } else {
        res.json({
          code: 500,
          msg: "邮箱输入错误"
        });
      }
    }
  });
};
