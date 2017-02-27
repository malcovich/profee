(function(){
	angular.module('Profee')
		.controller('globalController', ['$scope', '$state', '$http', function($scope, $state, $http){
			var url  = 'api/global/list';
			var userId = JSON.parse(localStorage.getItem('User-Data'))._id;

			$http({
				url: url, 
				method: "GET",
				params: {user_id: userId}
			}).then(function(res){
				$scope.list = res.data; 
			},
			function(err){
				console.log('err',err)
			});
		}])
}())