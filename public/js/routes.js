function routes($routeProvider) {
    for (var i = 0; i < 13; i++) {
        if (i < 3) {
            $routeProvider.when('/userCreation/step-' + i, {
                templateUrl: 'views/userCreation/step-' + i + '.html',
                controller: userCreationController
            });
        } else {
            $routeProvider.when('/userCreation/step-' + i, {
                templateUrl: 'views/userCreation/step-' + i + '.html',
                controller: userUpdateController
            });
        }
    }
    $routeProvider.when('/dashboard', {
        templateUrl: 'views/dash.html',
        controller: dashController
    });
    $routeProvider.when('/search', {
        templateUrl: 'views/search.html',
        controller: searchController
    });
    $routeProvider.when('/profile', {
        templateUrl: 'views/profile.html',
        controller: profileController
    });
    $routeProvider.when('/meet/:id', {
        templateUrl: 'views/meet.html',
        controller: meetController
    });
    $routeProvider.otherwise({
        redirectTo: '/userCreation/step-0'
    });
}