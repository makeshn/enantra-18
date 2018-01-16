(function () {

    var mailer = require('nodemailer');

    var transport = mailer.createTransport("SMTP",{
        service : "Gmail",
        auth : {
            user : "tech.capitalize@gmail.com",
            pass : "technicale"
        }
    });

    module.exports = transport;

})();
