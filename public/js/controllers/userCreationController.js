// MAIN CONTROLLER
function userCreationController($scope, $http, userService, userNavBarService, userFactory, $location) {
    if (userFactory.prevCurrent === 0 && userFactory.current === 0 && $location.url() != '/userCreation/step-0') {
        $location.path('/');
    } else {
        $scope.datas = userFactory.datas;
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
        $scope.pattern = new RegExp('^' + $scope.datas.password + '$');
        $scope.isValidPassword = function(regex) { //isValidPassword('[A-Z]+')
            if ($scope.datas.password !== '') {
                return $scope.datas.password ? !(new RegExp('^.*' + regex + '.*$').test($scope.datas.password)) : false;
            }
        };
        $scope.testUntouched = function(element) {
            return $(element).hasClass('ng-valid-pattern');
        };
        if (!$scope.datas.currentGender) $scope.datas.currentGender = 0;
        $scope.changeGender = function(gender) {
            if ($scope.datas.currentGender == gender) {
                $scope.datas.currentGender = 0;
            } else {
                $scope.datas.currentGender = gender;
            }
        };
        userFactory.datas = $scope.datas;
        $scope.step = function(e) {
            userNavBarService.step(e);
        };
    }
}
