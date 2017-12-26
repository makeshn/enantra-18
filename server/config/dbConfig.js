(function () {
    var mysql = require('mysql');
    var conf = require('../config/config.json');
    var config = conf.test;

    var connection = mysql.createConnection({
        host : config.host,
        port : config.port,
        user : config.username,
        password : config.password,
        database : config.database,
        multipleStatements : true
    });

    connection.connect(function (err) {
        if(err){
            console.log("DB error: "+err.message);
        }
        else{
            console.log("DB connection successful");
        }
    });


    module.exports = connection;

})();