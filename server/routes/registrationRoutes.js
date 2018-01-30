(function () {
    var express = require('express');
    var router = express.Router();
    var registrationController = require('../controllers/registrationController');

    router.post('/register',function (req, res) {
        registrationController.register(req,res);
    });

    router.post('/register/ebm',function (req, res) {
        registrationController.registerEbm(req,res);
    });

    

    module.exports = router;
})();
