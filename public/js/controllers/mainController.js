// MAIN CONTROLLER
function mainController($scope, $http, userService) {
    
    $scope.createAccount = function() {
        userService.createAccount();
    };
}
