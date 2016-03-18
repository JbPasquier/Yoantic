// MAIN CONTROLLER
function userUpdateController($scope, $http, userService, $location) {
    console.log(userService.datas);
    userService.getUserName(userService.datas.id).then(function(e){
        $scope.datas = e.data[0];
    });
    
}
