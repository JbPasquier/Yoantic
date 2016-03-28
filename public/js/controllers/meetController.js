// MEET CONTROLLER
function meetController($scope, $location, $http, $routeParams, userFactory, searchFactory, userService) {
    var id = $routeParams.id;
    userService.getUserById('56f6a4ad4cb92db115699b9c').then(function (e) {
<<<<<<< HEAD
        $('body').css('background-image', 'none').css('background-color', 'black');
=======
        $('body').css('background-image', 'none').css('background-image','url("./assets/bg.jpg")');
>>>>>>> Change wallpapaer, improve search, some cleaning
        userFactory.datas = e.data[0];
        $scope.username = userFactory.datas.profile.firstname + ' ' + userFactory.datas.profile.lastname;
        $scope.selects = searchFactory.selects;
        userService.getUserById(id).then(function (f) {
            $scope.selectedUser = f.data[0];
            console.log(id);
            console.log(f.data[0]);
        });
        var socket = io();
        $('.chat').submit(function () {
            socket.emit('chat message', $('#m').val());
            $('#m').val('');
            return false;
        });
        socket.on('chat message', function (msg) {
            $('#messages').prepend($('<li>').html('<span class="nickname">' + $scope.username + '</span> : ' + msg + '<br/><span class="pull-right">' + ((new Date()).toLocaleTimeString()) + '</span>'));
        });
    });
}
