// SEARCH CONTROLLER
function searchController($scope, $location, $http, userFactory, searchFactory, userService) {
    userService.getUserById('56f2ae5247708cc81a13e8a4').then(function (e) {
        userFactory.datas = e.data[0];
        $scope.username = userFactory.datas.profile.firstname + ' ' + userFactory.datas.profile.lastname;
        $scope.userprofile = userFactory.datas.profile;
        $scope.userpic = './assets/yoan_profil.jpg';
        $http.get('/user').then(function (e) {
            $scope.users = e.data;
        });
        $scope.selects = searchFactory.selects;
    });
}