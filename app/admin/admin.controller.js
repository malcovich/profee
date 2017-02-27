(function(){
	angular.module('Profee')
		.controller('adminController', ['$scope', '$state', '$http', function($scope, $state, $http){
			var url  = 'api/contact/add';
			$scope.save = function(){
				$http({
					method :'POST', 
					url : url,
					data : $scope.newContact
				}).then(function(res){
					$state.go('landing');
				},function(error){
					console.log(error)
				});
			}
		}])
}())