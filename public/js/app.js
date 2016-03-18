function config($routeProvider) {
    $routeProvider
        .when('/userCreation/step-1', {
            templateUrl: 'views/userCreation/step-1.html',
            controller: userCreationController
        })
        .when('/userCreation/step-2', {
            templateUrl: 'views/userCreation/step-2.html',
            controller: userCreationController
        })
        .when('/userCreation/step-3', {
            templateUrl: 'views/userCreation/step-3.html',
            controller: userUpdateController
        })
        .when('/join-us', {
            templateUrl: 'views/userCreation/joinus.html',
            controller: userCreationController
        })
        .otherwise({
            redirectTo: '/join-us'
        });
}
angular.module('app', ['ngRoute', 'ngAnimate', 'ngAutocomplete', 'flow'])
    .config(config)
    .controller('userCreationController', userCreationController)
    .controller('userUpdateController', userUpdateController)
    .service('userService', userService);
