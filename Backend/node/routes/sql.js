var mysql = require('mysql');
var pool = mysql.createPool({
    host: '127.0.0.1', //ip地址
	user: 'root', //数据库账号
	password: 'root', //数据库密码
	database: 'look' //数据库名
});

module.exports = {
    sql(json) {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log(err);
                return;
            }
            var sql = json.sql;
            connection.query(sql, json.arr, (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                json.data(data);
                connection.release();
            });
        });
    }
}