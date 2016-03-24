// SEARCH CONTROLLER
function searchController($scope, $location, $http, userFactory, searchFactory, userService) {
    userService.getUserById('56f2c1f74d31b95c5033c677').then(function (e) {
        $('body').css('background-image', 'none').css('background-color', 'black');
        userFactory.datas = e.data[0];
        $scope.username = userFactory.datas.profile.firstname + ' ' + userFactory.datas.profile.lastname;
        $scope.userprofile = userFactory.datas.profile;
        $scope.userpic = './assets/yoan_profil.jpg';
        $http.get('/user').then(function (e) {
            $scope.users = e.data;
        });
        $scope.search = {profile : {}};
        $scope.selects = searchFactory.selects;
    });
}
