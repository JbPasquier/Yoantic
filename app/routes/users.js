// ROUTES UserS
var User = require('../models/user.js');
module.exports 	= function(app) {

	app.get('/user', User.findAll);
	app.get('/user/:id', User.findUserName);
	app.post('/user', User.createAccount);
	app.put('/user/:id', User.updateAccount);
	app.delete('/user/:id', User.delete);

};
