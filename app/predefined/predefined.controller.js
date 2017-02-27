(function(){
	angular.module('Profee')
		.controller('predefinedController', ['$scope', '$state', '$http', 'Upload', function($scope, $state, $http, Upload){
			var url  = 'api/predefined/list';
			$http.get(url).then(function(res){
        $scope.list = res.data;
      }, function(err){
        console.log(err)
      });
      userId = JSON.parse(localStorage.getItem('User-Data'))._id;
      $scope.addToTop = function(id){
        $http.post('api/global/addPredefined',{'id': id, 'userId': userId}).then(function(res){

        });
      }
		}])
}())