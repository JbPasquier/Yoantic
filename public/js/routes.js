function routes($routeProvider) {
    for (var i = 0; i < 6; i++) {
        if (i < 3) {
            $routeProvider.when('/userCreation/step-'+i, {
                templateUrl: 'views/userCreation/step-' + i + '.html',
                controller: userCreationController
            });
        } else {
            $routeProvider.when('/userCreation/step-'+i, {
                templateUrl: 'views/userCreation/step-' + i + '.html',
                controller: userUpdateController
            });
        }
    }
    $routeProvider.otherwise({
        redirectTo: '/userCreation/step-0'
    });
}
