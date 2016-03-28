// MEET CONTROLLER
function meetController($scope, $location, $http, $routeParams, userFactory, searchFactory, userService) {
    var id = $routeParams.id;
    userService.getUserById('56f2c1f74d31b95c5033c677').then(function (e) {
        $('body').css('background-image', 'none').css('background-color', 'black');
        userFactory.datas = e.data[0];
        $scope.username = userFactory.datas.profile.firstname + ' ' + userFactory.datas.profile.lastname;
        $scope.selects = searchFactory.selects;
        userService.getUserById(id).then(function (f) {
            $scope.selectedUser = f.data[0];
            console.log(id);
            console.log(f.data[0]);
        });
    });
}