// MAIN CONTROLLER
function userUpdateController($scope, $http, userService, userNavBarService, $location) {
    if (userNavBarService.prevCurrent == 0 && userNavBarService.current == 0 && $location.url() != '/userCreation/step-0') {
        $location.path('/');
    } else {
        console.log(userService.datas);
        userService.getUserById(userService.datas._id).then(function (e) {
            $scope.datas = e.data[0];
            $scope.inputProfileVal = $scope.datas.profile[userService.databaseOrder[userNavBarService.current].name] || '';
            $scope.inputSearcheVal = $scope.datas.shearch[userService.databaseOrder[userNavBarService.current].name] || '';
        });
        userService.datas = $scope.datas;
        userService.datas.inputProfileVal = $scope.inputProfileVal;
        userService.datas.inputSearchVal = $scope.inputSearchVal;
        $scope.step = function (e) {
            userNavBarService.step(e);
        }
    }
}