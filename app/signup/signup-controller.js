(function(){
	angular.module('Profee')
		.controller('SignUpController', ['$scope', '$state', '$http', function($scope, $state, $http){
			var url  = 'api/user/signup';
			$scope.createUser = function(){
				$http({
					method :'POST', 
					url : url,
					data : $scope.newUser
				}).then(function(res){
					console.log(res)
				},function(error){
					console.log(error)
				});
			}
		}])
}())