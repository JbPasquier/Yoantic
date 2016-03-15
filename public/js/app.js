function config($routeProvider) {
	$routeProvider
		.when('/createAccount', {
			templateUrl: 'views/userCreation/step-1.html'
		})
		.otherwise({
			redirectTo: '/createAccount'
		});
}
function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}
angular.module('app', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
    .service('userService', userService)
    /*.factory('', )*/
    .run(run);
