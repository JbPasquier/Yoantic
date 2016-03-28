// SEARCH CONTROLLER
function searchController($scope, $location, $http, userFactory, searchFactory, userService) {
    userService.getUserById('56f6a4ad4cb92db115699b9c').then(function (e) {
        $('body').css('background-image', 'none').css('background-image','url("./assets/bg.jpg")');
        userFactory.datas = e.data[0];
        $scope.username = userFactory.datas.profile.firstname + ' ' + userFactory.datas.profile.lastname;
        $scope.userProfile = userFactory.datas.profile;
        $scope.userpic = './assets/yoan_profil.jpg';
        $http.get('/user').then(function (e) {
            $scope.users = e.data;
        });
        $scope.search = {profile : {}};
        $scope.selects = searchFactory.selects;
        $scope.resetSearch = function(){
            $scope.search = '';
            $scope.search = {profile : {}};
        };
        $scope.randomAge = function() {
            return Math.floor(Math.random()*43)+18;
        };
    });
}
