var librosController = require('./controllers/librosController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, Students')}}},
	{method: 'GET', path: '/v1/libros', config: librosController.getLibros},
  	{method: 'GET', path: '/v1/libros/{librosId}', config: librosController.getLibro},
	{method: 'PUT', path: '/v1/libros/{librosId}', config: librosController.updateLibro},
	{method: 'POST', path: '/v1/libros', config: librosController.createLibro},
	{method: 'DELETE', path: '/v1/libros/{librosId}', config: librosController.deleteLibro},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout}
];
