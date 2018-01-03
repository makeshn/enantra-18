(function () {
    var connection = require('../config/dbConfig');

    module.exports.register = function (param, callback) {
        try{
            var query = "INSERT into users set ?";
            connection.query(query,param,function (err, data) {
                callback(err,data);
            });
        }
        catch(err){
            callback(err);
        }
    };

    module.exports.registerEbm = function (body, callback) {
        try{
            var query = "INSERT into ebm set ?";
            connection.query(query,body,function (err, data) {
                callback(err,data);
            });
        }
        catch (err){
            callback(err);
        }
    };

    module.exports.getMail = function (id, callback) {
        try{
            var query = "SELECT email,name,referralcode from users where e_id = ?";
            console.log('Query succesful');
            connection.query(query,id,function (err, data) {
                callback(err,data);
            });
        }
        catch(err){
            callback(err);
        }
    }
    module.exports.getName = function (id, callback) {
        try{
            var query = "SELECT name from users where e_id = ?";
            
            connection.query(query,id,function (err, data) {
                callback(err,data);
            });
        }
        catch(err){
            callback(err);
        }
    }
    module.exports.getReferralCode = function (id, callback) {
        try{
            var query = "SELECT referralcode from users where e_id = ?";
            
            connection.query(query,id,function (err, data) {
                callback(err,data);
            });
        }
        catch(err){
            callback(err);
        }
    }

})();
