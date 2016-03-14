// MAIN CONTROLLER
function mainController($scope, $http, userService) {
	$scope.title = "user List";

	function load(){
		userService.get().then(function(res){
			$scope.users = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.nickname = $scope.nickname;
		userService.create(data).then(function(res){
			load();
		});
		$scope.nickname = "";
	};
	$scope.update = function(user){
		userService.update(user._id, user).then(function(res){
			load();
		});
	};
	$scope.delete = function(user){
		userService.delete(user._id).then(function(res){
			load();
		});
	};
	load();
}
