function config($routeProvider) {
	$routeProvider
		.when('/new', {
			templateUrl: 'views/new.html'
		})
		.otherwise({
			redirectTo: '/new'
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
