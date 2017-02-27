(function(){
	angular.module('Profee')
		.controller('LandingController', ['$scope', '$state', '$http', 'UserFactory', function($scope, $state, $http, UserFactory){
			init();

			function init(){
				var user = {};
				$scope.showElement = 'landing';

				user = UserFactory.getUser();
				checkBlock(user)

				$scope.$on('userLogined',function(){
					user = UserFactory.getUser();
					checkBlock(user)
				});
				$scope.$on('userLogout',function(){
					user = undefined;
					checkBlock(user);
				});
				console.log(user)
				getContactsList(user._id)
				
			};

			function checkBlock(user){
				if (user && user.role){
					if (user.role == 'customer'){
						$scope.showElement = 'customer';
					} else if(user.role == 'worker'){
						$scope.showElement = 'worker';
					}
				} 
				else {
					$scope.showElement = 'landing';
				}
			};

			function getContactsList(id){
				$http({
					method :'GET', 
					url : 'api/constacts/list',
					params: {user_id: id}
				}).then(function(res){
					console.log(res)
				},function(error){
					console.log(error)
				});
			}

			

		}]);


}())