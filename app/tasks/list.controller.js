(function(){
	angular.module('Profee')
		.controller('listController', ['$scope', '$state', '$http', 'Upload', 'TaskFactory', function($scope, $state, $http, Upload, TaskFactory){
			var url  = 'api/task/list';
      userId = JSON.parse(localStorage.getItem('User-Data'))._id;
      var type = TaskFactory.getHeader();
      
      switch (type) {
        case 'days': 
          setHeader('день');
          break;
        case 'mounths': 
          setHeader('месяц');
          break;
        case 'years': 
          setHeader('год');
          break;
        default:
          setHeader('год');
      };
      
			$http({
        url: url, 
        method: "GET",
        params: {user_id: userId, type: type}
      }).then(function(res){
        $scope.list = res.data; 
      },
      function(err){
        console.log('err',err)
      });

      

      function setHeader(str){
        $scope.header = str;
      } 
      

		}])
}())