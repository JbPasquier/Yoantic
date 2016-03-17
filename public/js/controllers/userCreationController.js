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
            $('body').css('background-image', 'none').css('background-image', 'url("./assets/accountCreation/step' + ($scope.datas.current + 1) + '.jpg")');
        } else {
            $scope.datas.current = Number(where);
            $('body').css('background-image', 'none').css('background-image', 'url("./assets/accountCreation/step' + where + '.jpg")');
        }
        userService.datas = $scope.datas;
        $location.path(path);
    };
    $scope.register = function() {
        $('body').css('background-image', 'none').css('background-image', 'url("./assets/accountCreation/step2.jpg")');
        $location.path('/userCreation/step-1');
    }
    $scope.createAccount = function() {
        userService.createAccount();
    };
    userService.datas = $scope.datas;
}
