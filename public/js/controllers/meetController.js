// MEET CONTROLLER
function meetController($scope, $location, $http, $routeParams, userFactory, searchFactory, userService) {
    var id = $routeParams.id;
    userService.getUserById(userFactory.datas._id).then(function (e) { //'56f6a4ad4cb92db115699b9c' = yoan
        $('body').css('background-image', 'none').css('background-image', 'url("./assets/bg.jpg")');
        userFactory.datas = e.data[0];
        $scope.username = userFactory.datas.profile.firstname + ' ' + userFactory.datas.profile.lastname;
        $scope.selects = searchFactory.selects;
        userService.getUserById(id).then(function (f) {
            $scope.selectedUser = f.data[0];
        });
        var socket = io();
        $('.chat').submit(function () {
            if (userFactory.datas.profile.sexe === true) {
                socket.emit('chat message', '<span class="femme">' + $scope.username + '</span> : ' + $('#m').val());
            } else {
                socket.emit('chat message', '<span class="homme">' + $scope.username + '</span> : ' + $('#m').val());
            }
            $('#m').val('');
            return false;
        });
        socket.on('chat message', function (msg) {
            $('#messages').prepend($('<li>').html(msg + '<span class="pull-right">' + ((new Date()).toLocaleTimeString()) + '</span>'));
        });
    });
}