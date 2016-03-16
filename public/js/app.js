function config($routeProvider) {
    $routeProvider
        .when('/userCreation/step-1', {
            templateUrl: 'views/userCreation/step-1.html'
        })
        .when('/userCreation/step-2', {
            templateUrl: 'views/userCreation/step-2.html'
        })
        .when('/test', {
            templateUrl: 'views/userCreation/test.html'
        })
        .otherwise({
            redirectTo: '/userCreation/step-1'
        });
}
angular.module('app', ['ngRoute', 'ngAnimate', 'ngAutocomplete', 'flow'])
    .config(config)
    .controller('userCreationController', userCreationController)
    .service('userService', userService);
