//引入模块
let conn = require("./mysqlHelper");

exports.getAllCateList = callback => {
  let sql = `select * from categories`;
  conn.query(sql, (err,result) => {
    if(err)return callback(err)
    callback(null,result)
  });
};
