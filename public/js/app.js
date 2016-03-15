function config($routeProvider) {
	$routeProvider
		.when('/createAccount', {
			templateUrl: 'views/userCreation/step-1.html'
		})
		.otherwise({
			redirectTo: '/createAccount'
		});
}
angular.module('app', ['ngRoute', 'ngAnimate'])
    .config(config)
    .controller('userCreationController', userCreationController)
    .service('userService', userService);
