var express = require('express');
var router = express.Router();
var mySql = require('./sql')

/* GET users listing. */
router.post('/login', (req, res) => {
      var json = req.body
      console.log(json)
      mySql.sql({
        sql: `insert into login (name,pass) values('${json.name}','${json.pass}')`,
        // sql: 'insert into login (name,pass) values(?,?)',
        // arr: [json.name, json.pass],
        data(data) {
          console.log(data)
          res.send({
            code: 0,
            data: ''
          })
        }
        // sql: `select * from login where user=1000`,
        // data(data) {
        //   console.log(data)
        //   res.send({
        //     code: 0,
        //     data: ''
        //   })
        // }
      })
})
      module.exports = router;