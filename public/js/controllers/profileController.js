// SEARCH CONTROLLER
function profileController($scope, $location, $http, userFactory, userService) {
    userService.getUserById('56f2d9b261344f38095e5db8').then(function (e) {
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