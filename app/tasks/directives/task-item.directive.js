(function(){
  angular.module('Profee')
    .directive('task', function() {
      return {
        restrict: 'A',
        scope: {
          item: '='
        },
        templateUrl: 'app/tasks/directives/task-item.html',
        controller: ['$scope', 'TaskFactory', function($scope, TaskFactory) {
          if ($scope.item.status == 2) {
            $scope.taskDone = true;
          }
          $scope.getTemp = function(city) {
            $scope.delete = function(id){
    	        TaskFactory.changeStatus(id, 0).then(function(res){
    	          $scope.list =  $scope.list.filter(function(i){
    	            return i._id !== res.data._id;
    	          })
    	        }, function(err){
    	          console.log(err)
    	        });
            }
          };

          $scope.setTaskDone = function(id){
            TaskFactory.changeStatus(id, 2).then(function(res){
              console.log('done', res)
              $scope.taskDone = true;
            }, function(err){
              console.log(err)
            });
          };

        }],

        link: function(scope, elem, attrs) {
    			elem.bind('click', function() {
    				elem.css('background-color', 'white');
    				scope.$apply(function() {
    					scope.color = "white";
    				});
    			});
    			elem.bind('mouseover', function() {
    				elem.css('cursor', 'pointer');
    			});
        }
    	}
    });
  }())