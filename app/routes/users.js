// ROUTES TODOS
var User = require('../models/user.js');
module.exports 	= function(app) {

	app.get('/user', Todo.findAll);
	app.post('/user', Todo.create);
	app.put('/user/:id', Todo.update);
	app.delete('/user/:id', Todo.delete);
    
};
