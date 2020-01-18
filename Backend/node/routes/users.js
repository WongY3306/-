var express = require('express');
var router = express.Router();
var mySql = require('./sql')

/* GET users listing. */
router.post('/login', (req, res) => {
      var json = req.body
      mySql.sql({
        sql: `insert into login (name,pass,tel) values('${json.name}','${json.pass}','${json.tel}')`,
        data(data) {
          console.log(data)
          res.send({
            user: data.insertId,
            data:'注册成功'
          })
        }
      })
})
      module.exports = router;