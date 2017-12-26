(function () {
    module.exports = function (app) {
    	var path = require('path');
        app.use('/api/web',require('./routes/registrationRoutes'));
        app.get('/registerEBM/:id',function(req,res)
        {
        	res.sendFile(path.resolve(__dirname,'../ebmregister.html'));
        	console.log();
        });
        app.get('*',function(req,res)
    {
        res.redirect('/');
    });
    }
})();