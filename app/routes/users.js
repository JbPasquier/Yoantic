// ROUTES UserS
var User = require('../models/user.js');
module.exports 	= function(app) {

	app.get('/user', User.findAll);
	app.post('/user', User.createAccount);
	app.put('/user/:id', User.update);
	app.delete('/user/:id', User.delete);

};
