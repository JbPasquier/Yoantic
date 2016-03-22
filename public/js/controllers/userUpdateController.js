// MAIN CONTROLLER
function userUpdateController($scope, $http, userService, userNavBarService, userFactory, $location) {
    if (userFactory.prevCurrent == 0 && userFactory.current == 0 && $location.url() != '/userCreation/step-0') {
        $location.path('/');
    } else {
        userService.getUserById(userFactory.datas.id).then(function (e) {
            $scope.datas = e.data[0];
            $scope.inputProfileVal = $scope.datas.profile[userFactory.databaseOrder[userFactory.current].name] || '';
            $scope.inputSearcheVal = $scope.datas.shearch[userFactory.databaseOrder[userFactory.current].name] || '';
        });
        userFactory.datas = $scope.datas;
        debugger;
        userFactory.datas.inputProfileVal = $scope.inputProfileVal;
        userFactory.datas.inputSearchVal = $scope.inputSearchVal;
        $scope.step = function (e) {
            userNavBarService.step(e);
        }
    }
}