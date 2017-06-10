var express = require('express');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn('/account/login');
var router = express.Router();

router.get('/', ensureLoggedIn, function (req, res) {
	res.render('index', { title: 'test' });
});


module.exports = router;
