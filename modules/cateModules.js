//
const mysql = require("mysql");

var conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "baixiu",
  dateStrings: true
});

exports.getAllCateList = callback => {
  let sql = `select * from categories`;
  conn.query(sql, (err,result) => {
    if(err)return callback(err)
    callback(null,result)
  });
};
