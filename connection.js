const mysql = require('mysql2');

function mysqlConnectionCore(uri) {

var pool = mysql.createPool({
      host: process.env.ND_HOST,
      user: process.env.ND_USERNAME,
      password: process.env.ND_PASSWORD,
      database: process.env.ND_DATABASE
    });
    
    // Connect to the database
    const promisePool = pool.promise();
    console.log(`Mysql :: CORESQL connected successfully`);
    return promisePool;

}
module.exports = {
  coreMysql: mysqlConnectionCore(),
};

