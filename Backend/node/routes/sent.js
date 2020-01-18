var express = require('express');
var router = express.Router();
var mySql = require('./sql')
// 登录
router.post("/", function(req, res, next) {
  var json = req.body;
  console.log(json)
  // 判断登陆
  mySql.sql({
    sql: `select * from login where user='${json.user}' and pass='${json.pass}'`,
    data(data) {
      if (data.length) {
        res.send({
          ok: 0,
          data: data
        });
      } else {
        res.send({
          ok: 1,
          data: ""
        });
      }
    }
  });
});

module.exports = router;