(function(){
	angular.module('Profee')
		.controller('addGlobalController', ['$scope', '$state', '$http', function($scope, $state, $http){
			var url  = 'api/global/add';
			$scope.newGlobal = {
				userId : JSON.parse(localStorage.getItem('User-Data'))._id
			}
			$scope.newGlobal
			$scope.save = function(){
				$http({
					method :'POST', 
					url : url,
					data : $scope.newGlobal
				}).then(function(res){
					$state.go('global');
				},function(error){
					console.log(error)
				});
			}
		}])
}())