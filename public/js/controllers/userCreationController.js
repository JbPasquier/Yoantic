// MAIN CONTROLLER
function userCreationController($scope, $http, userService, userNavBarService, userFactory, $location) {
    if (userFactory.prevCurrent === 0 && userFactory.current === 0 && $location.url() != '/userCreation/step-0') {
        $location.path('/');
    } else {
        $('body').css('background-image', 'none').css('background-image', 'url("./assets/accountCreation/step' + $location.url().split('-')[1] + '.jpg")');
        userFactory.current = $location.url().split('-')[1];
        $scope.datas = userFactory.datas;
        $scope.updatePattern = function () {
            $scope.pattern = new RegExp('^' + $scope.datas.password + '$');
        };
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
        $scope.step = function(e) {
            userFactory.datas = $scope.datas;
            userNavBarService.step(e);
        };
        $scope.toBase64 = function(files){
            userService.toBase64(files);
            $scope.datas.avatar = userFactory.datas.avatar;
        };

        $scope.error = '';
        $scope.userLog = function() {
            userService.userLogin({nickname:$scope.userLogin,password:$scope.userPassword}).then(function(res){
                if(res.data.statusCode != 200) {
                    $scope.error = 'Utilisateur inconnu';
                } else {
                    userFactory.datas._id = res.data._id;
                    $location.path('/dashboard');
                }
            });
        };
    }
}
