(function () {
    var path = require('path');
    var responseHandler = {
        response : function (res, response) {
            var message = "Success";
            var statusCode = 200;
            var data = {message : message,statusCode : statusCode};
            data.response = response;
            res.redirect("www.enantra.org");

        },
        error : function (res, err) {
            var message = err.message !== undefined && err.message.length >0?err.message: "Something went wrong";
            var statusCode = err.statusCode !== undefined ? err.statusCode : 500;
            var code = err.code !== undefined ? err.code : 500;
            var stack = err.stack !== undefined ? err.stack : "Something went wrong";
            var data = {
                message : message,
                statusCode : statusCode,
                code : code,
                stack : stack
            };
//res.status(statusCode).json(data);
            res.sendFile(path.resolve(__dirname,'../error.html'));
        }
    };

    module.exports = responseHandler;
})();
