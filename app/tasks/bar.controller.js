(function(){
	angular.module('Profee')
		.controller('barController', ['$scope', '$state', '$http', 'Upload', 'TaskFactory', function($scope, $state, $http, Upload, TaskFactory){
  			var url  = 'api/task/add';
        $scope.newTask = {};
        userId = JSON.parse(localStorage.getItem('User-Data'))._id;
        $scope.$watch(function(){return TaskFactory.getHeader()}, function(newVal, oldVal){
          $scope.newTask.type = newVal;
        })
        
        $scope.newTask.userId = userId;

        $scope.add = function(id){
          $http.post(url, $scope.newTask).then(function(res){
        });
      }
		}])
}())