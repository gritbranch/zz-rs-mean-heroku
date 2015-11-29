var users = require('../../app/controllers/users.server.controller');
var passport = require('passport');

module.exports = function (app) {
	app.route('/signup')
		.get(users.renderSignup)
		.post(users.signup);

	app.route('/signin')
		.get(users.renderSignin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/signin',
			failureFlash: true
		}));

	app.get('/signout', users.signout);

	app.route('/api/users')
		.get(users.requiresLogin, users.list)
		.post(users.create); //not used, used signup function to add users

	app.route('/api/users/:userId')
		.get(users.requiresLogin, users.read)
		.put(users.requiresLogin, users.update)
		.delete(users.requiresLogin, users.delete);

	app.param('userId', users.userByID);
};