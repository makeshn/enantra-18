(function () {

    var commonService = require('../services/commonService');
    var registerDao = require('../daos/registrationDao');
    var config = require('../config/config.json');
    var hogan = require('hogan.js');
    var fs = require('fs');
    var path = require('path');
    var template = fs.readFileSync(path.resolve(__dirname,'../views/email.hjs'),'utf-8');
    var ebmtemplate = fs.readFileSync(path.resolve(__dirname,'../views/ebmemail.hjs'),'utf-8');
    
    var compiledTemplate = hogan.compile(template);
    var ebmcompiledTemplate = hogan.compile(ebmtemplate);
    module.exports.constructRegisterData = function (body, code, callback) {
        commonService.generateToken(6,config.userPrefix,function (err, token) {
            if(err){
                callback(err,token);
            }
            else{ 
                var postData = {};
                postData.name = body.name;
                postData.email = body.email;
                postData.number = body.number;
                postData.dob = body.dob;
                postData.college = body.college;
                postData.year = body.year;
                postData.accomodation = body.accomodation;
                postData.referralcode = code;
                postData.e_id = token;
                callback(null,postData);
            }
        });
    };

    module.exports.constructMail = function (name,e_id, token,mail,callback) {
        var mail = {
            from : "Enantra 2k18",
            to : mail,
            subject : "ENANTRA 2.0 Welcomes You",
            html : compiledTemplate.render({registername: name, id:e_id}),


        };
        callback(null,mail);
    };

    module.exports.ebmMail = function (mail,name,token,callback) {
        console.log(mail);
        var mail = {
            from : "Enantra 2k18",
            to : mail,
            subject : "Wohoo! Welcome onboard, Enantra Brand Manager",
            html : ebmcompiledTemplate.render({registername: name, id:token}),
        };
        callback(null,mail);
    };

    module.exports.fetchMail = function (id, callback) {
        registerDao.getMail(id,callback);
    };
module.exports.fetchName = function (id, callback) {
        registerDao.getName(id,callback);
    };
module.exports.fetchReferralCode = function (id, callback) {
        registerDao.getReferralCode(id,callback);
    };

})();
