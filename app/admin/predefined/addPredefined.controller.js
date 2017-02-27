(function(){
	angular.module('Profee')
		.controller('addPredefinedController', ['$scope', '$state', '$http', 'Upload', function($scope, $state, $http, Upload){
			var url  = 'api/predefined/add';

            $scope.$watch(function(){
                return $scope.file;
            }, function(){
                $scope.upload($scope.file)
            })

            $scope.user

            $scope.upload = function(file){
                if(file){
                    Upload.upload({
                        url: 'api/predefined/addPhoto',
                        method :'POST',
                        data: {},
                        file: file
                    }).success(function(data){
                        $scope.newPredefined.img = data.img;
                    }).error(function(error){
                        console.log(error)
                    })
                }
            };
			$scope.save = function(){
				$http({
					method :'POST', 
					url : 'api/predefined/add',
					data : $scope.newPredefined
				}).then(function(res){
					$state.go('admin');
				},function(error){
					console.log(error)
				});
			}
		}])
}())