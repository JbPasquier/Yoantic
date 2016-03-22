// MAIN CONTROLLER
function userUpdateController($scope, $http, userService, userNavBarService, userFactory, $location) {
    if (userFactory.prevCurrent === 0 && userFactory.current === 0 && $location.url() != '/userCreation/step-0') {
        $location.path('/');
    } else {
        if (userFactory.current == 3 && userFactory.prevCurrent == 2) {
            userService.createAccount(userFactory.datas).then(function(e) {
                userService.getUserById(userFactory.datas.id).then(function(e) {
                    userFactory.datas = e.data[0];
                });
            });
        } else {
            userService.getUserById(userFactory.datas._id).then(function(e) {
                userFactory.datas = e.data[0];
            });
        }
        $scope.save = function() {
            userFactory.datas.inputProfileVal = $scope.inputProfileVal;
            userFactory.datas.inputSearchVal = $scope.inputSearchVal;
        };
        $scope.step = function(e) {
            userNavBarService.step(e);
        };
    }
}
