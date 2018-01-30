(function () {
    module.exports = function (app) {
    	var path = require('path');
        app.use('/api/web',require('./routes/registrationRoutes'));
        
        app.get('*',function(req,res)
    {
        res.redirect('/');
    });
    }
})();
