var express = require('express');
var passport = require('passport');
var router = express.Router();

// Render the login template
router.get('/login', function (req, res) {
	res.render('login', { env: process.env });
});

// Perform session logout and redirect to homepage
router.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

// Perform the final stage of authentication and redirect to '/'
router.get('/callback', passport.authenticate('auth0',
	{
		failureRedirect: '/account/login'
	}), function (req, res) {
		var test = req.isAuthenticated();
		res.redirect(req.session.returnTo || 'http://localhost:3000');
	});

module.exports = router;