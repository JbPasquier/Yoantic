// MAIN CONTROLLER
function userCreationController($scope, $http, userService, $location) {
    $scope.datas = userService.datas;
    $scope.isValidPassword = function(regex) { //isValidPassword('[A-Z]+')
        return $scope.datas.password ? !(new RegExp('^.*'+regex+'.*$').test($scope.datas.password)) : false;
    };
    if (!$scope.datas.current) $scope.datas.current = 1;
    if (!$scope.datas.currentGender) $scope.datas.currentGender = 2;
    $scope.changeGender = function(gender) {
        $scope.datas.currentGender = gender;
    };
    $scope.step = function(where) {
        var path = '/userCreation/step-' + where;
        if (where == 'next') {
            path = '/userCreation/step-' + ($scope.datas.current + 1);
        }
        userService.datas = $scope.datas;
        $location.path(path);
    };
    $scope.createAccount = function() {
        userService.createAccount();
    };
    userService.datas = $scope.datas;
}
