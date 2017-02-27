(function(){
	angular.module('Profee')
		.controller('singleGlobalController', ['$scope', '$state', '$http', function($scope, $state, $http){
			var url  = 'api/global';
			var userId = JSON.parse(localStorage.getItem('User-Data'))._id;
			$http({
				url: url, 
				method: "GET",
				params: {id: $state.params.globalId}
			}).then(function(res){
				$scope.global = res.data[0]; 
			},
			function(err){
				console.log('err',err)
			});
		}])
}())