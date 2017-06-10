var express = require('express');
// var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn('/account/login');
var router = express.Router();

// Get the user profile
router.get('/', ensureLoggedIn, function (req, res) {
	res.render('user', { user: req.user });
});

module.exports = router;