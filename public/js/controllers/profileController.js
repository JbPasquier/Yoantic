// SEARCH CONTROLLER
function profileController($scope, $location, $http, userFactory, userService) {
    userService.getUserById('56f2c1f74d31b95c5033c677').then(function (e) {
        $('body').css('background-image', 'none').css('background-color', 'black');
        userFactory.datas = e.data[0];
        $scope.username = userFactory.datas.profile.firstname + ' ' + userFactory.datas.profile.lastname;
        $scope.user = userFactory.datas;
        $scope.toBase64 = function (files) {
            userService.toBase64(files);
            $scope.datas.avatar = userFactory.datas.avatar;
        };
    });
}
