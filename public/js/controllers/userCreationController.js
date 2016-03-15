// MAIN CONTROLLER
function userCreationController($scope, $http, userService) {
    $scope.changeGender = function(gender) {
        
    }
    $scope.createAccount = function() {
        userService.createAccount();
    };
}
