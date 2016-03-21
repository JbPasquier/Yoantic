// MAIN CONTROLLER
function userCreationController($scope, $http, userService, $location) {
    $scope.datas = userService.datas;
    $scope.datas = {
        currentGender: 1,
        nickname: 'a',
        password: "aA123",
        passwordConfirm: "aA123",
        city: 'a',
        major18: true,
        firstName: 'a',
        lastName: 'a',
        email: 'a@a.aa'
    };
    $scope.isValidPassword = function(regex) { //isValidPassword('[A-Z]+')
        return $scope.datas.password ? !(new RegExp('^.*' + regex + '.*$').test($scope.datas.password)) : false;
    };
    $scope.testUntouched = function(element) {
        return $(element).hasClass('ng-valid-pattern');
    };
    if (!$scope.datas.current) $scope.datas.current = 1;
    if (!$scope.datas.currentGender) $scope.datas.currentGender = 0;
    $scope.changeGender = function(gender) {
        if ($scope.datas.currentGender == gender) {
            $scope.datas.currentGender = 0;
        } else {
            $scope.datas.currentGender = gender;
        }
    };
    $scope.step = function(where) {
        if (where == 'next') {
            $scope.datas.current++;
            if($scope.datas.current == 3) {
                userService.datas = $scope.datas;
                userService.datas._id = userService.createAccount($scope.datas);
                $scope.datas = userService.datas;
            }
            $('body').css('background-image', 'none').css('background-image', 'url("./assets/accountCreation/step' + $scope.datas.current + '.jpg")');
        } else {
            $scope.datas.current = where;
            $('body').css('background-image', 'none').css('background-image', 'url("./assets/accountCreation/step' + where + '.jpg")');
        }
        var path = '/userCreation/step-' + $scope.datas.current;
        userService.datas = $scope.datas;
        $location.path(path);
    };
    $scope.register = function() {
        $('body').css('background-image', 'none').css('background-image', 'url("./assets/accountCreation/step2.jpg")');
        $location.path('/userCreation/step-1');
    };
    userService.datas = $scope.datas;
}
