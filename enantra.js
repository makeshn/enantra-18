(function(){
    var express = require('express');
    var app = express();
    var config = require('./server/config/config.json');
    var bodyParser = require('body-parser');
    var cors = require('cors');
    var morgan = require('morgan');
    var connection = require('./server/config/dbConfig');
    var dbHandler = require('./server/middlewares/dbHandler');
    var mailer = require('./server/config/mailconfig');

    //--------------------------middlewares--------------------------------------//
    
    app.use(cors());
    app.use(morgan('dev'));
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
    //app.use(dbHandler(connection));
    app.use('/',express.static(__dirname));

    var routes = require('./server/index')(app);
    app.listen(process.env.PORT||config.port);
    process.on('SIGINT',function () {
        connection.end(function () {
            console.log("App terminated and DB closed");
            process.exit(0);
        });
    });
    console.log("Server at port "+config.port);
    module.exports = app;
})();
