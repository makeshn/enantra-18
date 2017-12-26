(function () {
    var registrationDao = require('../daos/registrationDao');

    module.exports.register = function(param,callback){
        registrationDao.register(param,callback);
    };

    module.exports.registerEbm = function (body, callback) {
        registrationDao.registerEbm(body,callback);
    };

})();