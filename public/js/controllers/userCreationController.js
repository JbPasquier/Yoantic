// MAIN CONTROLLER
function userCreationController($scope, $http, userService, $location) {
    $scope.datas = userService.datas;
    $scope.isValidPassword = function(regex) { //isValidPassword('[A-Z]+')
        return $scope.datas.password ? !(new RegExp('^.*' + regex + '.*$').test($scope.datas.password)) : false;
    };
    $scope.testUntouched = function(element) {
        return $(element).hasClass('ng-valid-pattern');
    };
    if (!$scope.datas.current) $scope.datas.current = 1;
    if (!$scope.datas.currentGender) $scope.datas.currentGender = 2;
    $scope.changeGender = function(gender) {
        if ($scope.datas.currentGender == gender) {
            $scope.datas.currentGender = 2;
        } else {
            $scope.datas.currentGender = gender;
        }
    };
    $scope.step = function(where) {
        var path = '/userCreation/step-' + where;
        if (where == 'next') {
            path = '/userCreation/step-' + ($scope.datas.current + 1);
        } else {
            $scope.datas.current = Number(where);
        }
        userService.datas = $scope.datas;
        $('body').css('background-image', 'none').css('background-color', '#ffffff');
        $location.path(path);
    };
    $scope.createAccount = function() {
        userService.createAccount();
    };
    userService.datas = $scope.datas;
}
