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
		data.description = $scope.description;
		userService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(user){
		userService.update(user._id, user).then(function(res){
			load();
		});
	}
	$scope.delete = function(user){
		userService.delete(user._id).then(function(res){
			load();
		});
	}
	load();
}
