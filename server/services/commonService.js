(function () {

    var connection = require('../config/dbConfig');
    var tokenGenerator = require('voucher-code-generator');

    module.exports.beginTransaction = function (callback) {
        try{
            connection.beginTransaction(function (err) {
                callback(err);
            });
        }
        catch(err){
            callback(err);
        }
    };

    module.exports.rollback = function (callback) {
        try{
            connection.rollback(function (err) {
                callback(err);
            });
        }
        catch (err){
            callback(err);
        }
    };

    module.exports.commit = function (callback) {
        try{
            connection.commit(function (err) {
                callback(err);
            });
        }
        catch (err){
            callback(err);
        }
    };

    module.exports.generateToken = function (length, prefix, callback) {
        try{
            var token = tokenGenerator.generate({
                length : length,
                count : 1,
                charset : tokenGenerator.charset("alphanumeric"),
                prefix : prefix
            }).toString().toUpperCase();
            if(token){
                callback(null,token);
            }
            else{
                callback({mesage:"Error generating token"});
            }
        }
        catch(err){
            callback(err);
        }
    };

})();