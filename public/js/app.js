angular.module('app', ['ngRoute', 'ngAnimate', 'ngAutocomplete', 'flow'])
    .config(routes)
    .controller('userCreationController', userCreationController)
    .controller('userUpdateController', userUpdateController)
    .controller('dashController', dashController)
    .service('userService', userService)
    .service('userNavBarService', userNavBarService)
    .factory('userFactory', userFactory);
