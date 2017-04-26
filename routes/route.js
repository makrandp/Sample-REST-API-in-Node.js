var express           = require('express');
var router            = express.Router();

var users = require('../controllers/usersController');
var admin = require('../controllers/adminController');

// export the router
module.exports = router;

router.get('/users/login/', users.findAll);
router.get('/users/login/:emailID/:name/', users.checkEmail);
router.post('/users/login/', users.add);

router.get('/admin', admin.index);

/*module.exports = function(app) {

 var users = require('./controllers/usersController');
    app.get('/users/login/', users.findAll);
    app.get('/users/login/:emailID/:password/', users.checkEmailPassword);
    app.post('/users/login/', users.add);

} */


// In controller we can call this methods

