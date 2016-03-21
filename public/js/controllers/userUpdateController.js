// MAIN CONTROLLER
function userUpdateController($scope, $http, userService, $location) {
    $scope.databaseOrder = {
        3: {
            name: 'covenant'
        }
    };
    if(!$scope.datas) $scope.datas = userService.datas;
    userService.getUserById($scope.datas._id).then(function(e){
        $scope.datas = e.data[0];
        $scope.datas.current = 3;
        $scope.inputVal = $scope.datas.profile[$scope.databaseOrder[$scope.datas.current].name] || '';
    });
    $scope.update = function() {
        var obj = {};
        obj[$scope.databaseOrder[$scope.datas.current].name] = $scope.inputVal;
        userService.updateAccount($scope.datas._id,obj);
    };
    if (!$scope.datas.current) $location.path('/');
    $scope.step = function(where) {
        if (where == 'next') {
            $scope.datas.current++;
            $('body').css('background-image', 'none').css('background-image', 'url("./assets/accountCreation/step' + $scope.datas.current + '.jpg")');
        } else {
            if(where < 3) {
                where = 3;
            }
            $scope.datas.current = where;
            $('body').css('background-image', 'none').css('background-image', 'url("./assets/accountCreation/step' + where + '.jpg")');
        }
        var path = '/userCreation/step-' + $scope.datas.current;
        userService.datas = $scope.datas;
        $location.path(path);
    };
}
