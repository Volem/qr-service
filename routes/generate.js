var express = require('express');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn('/account/login');
var router = express.Router();

router.get('/static', ensureLoggedIn, function (req, res) {
	res.render('static', { title: 'Statik QR' });
});

router.get('/dynamic', ensureLoggedIn, function (req, res) {
	res.render('dynamic', { title: 'Dinamik QR' });
});


module.exports = router;
