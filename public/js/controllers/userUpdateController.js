// MAIN CONTROLLER
function userUpdateController($scope, $http, userService, userNavBarService, userFactory, $location) {
    if (userFactory.prevCurrent === 0 && userFactory.current === 0 && $location.url() != '/userCreation/step-0') {
        $location.path('/');
    } else {
        $scope.inputProfileVal = 'non';
        $scope.inputSearchVal = 'non';
        $scope.changeBg = function() {
            $('body').css('background-image', 'none').css('background-image', 'url("./assets/accountCreation/step' + $location.url().split('-')[1] + '.jpg")');
            $('#fademe').css('background-image', 'url("./assets/accountCreation/step' + $location.url().split('-')[1] + '.jpg")').fadeOut(1000);
        };
        userFactory.current = $location.url().split('-')[1];
        if (userFactory.current == 3 && userFactory.prevCurrent == 2) {
            userService.createAccount(userFactory.datas).then(function (e) {
                userService.getUserById(userFactory.datas.id).then(function (e) {
                    userFactory.datas = e.data[0];
                });
            });
        } else {
            userService.getUserById(userFactory.datas._id).then(function (e) {
                userFactory.datas = e.data[0];
            });
        }
        $scope.changeInputProfileVal = function(e) {
            $scope.inputProfileVal = e;
        };
        $scope.changeInputSearchVal = function(e) {
            $scope.inputSearchVal = e;
        };
        $scope.save = function () {
            userFactory.datas.inputProfileVal = $scope.inputProfileVal;
            userFactory.datas.inputSearchVal = $scope.inputSearchVal;
        };
        $scope.step = function (e) {
            userNavBarService.step(e);
        };
    }
}