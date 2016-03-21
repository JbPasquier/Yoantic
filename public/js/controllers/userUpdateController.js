// MAIN CONTROLLER
function userUpdateController($scope, $http, userService, $location) {
    $scope.databaseOrder = {
        3: {
            name: 'convenant'
        },
        4: {
            name: 'married'
        },
        5: {
            name: 'children'
        },
        6: {
            name: 'wantChildren'
        },
        7: {
            name: 'height'
        },
        8: {
            name: 'weight'
        },
        9: {
            name: 'hairLenght'
        },
        10: {
            name: 'hairColor'
        },
        10: {
            name: 'origin'
        }
    };
    if(!$scope.datas) $scope.datas = userService.datas;
    userService.getUserById($scope.datas._id).then(function(e){
        $scope.datas = e.data[0];
        $scope.datas.current = 3;
        $scope.inputVal = $scope.datas.profile[$scope.databaseOrder[$scope.datas.current].name] || '';
    });
    $scope.update = function() {
        var objProfile = {}, objSearch = {};
        objProfile[$scope.databaseOrder[$scope.datas.current].name] = $scope.inputProfileVal;
        objSearch[$scope.databaseOrder[$scope.datas.current].name] = $scope.inputSearchVal;
        userService.updateAccount($scope.datas._id,objProfile,objSearch);
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
