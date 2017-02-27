angular.module('Profee').factory('TaskFactory', ['$state', '$http', function($state, $http) {
	var service = {};
    // var deferred = $q.defer();

    service.setHeader = function(){
        this.hearder = $state.current.url.slice(1);
    }

    service.getHeader = function(){
        return this.hearder;
    }

    service.changeStatus = function(id,status){
        var url = 'api/task/changeStatus'
         return $http({
            url: url, 
            method: "PUT",
            params: {id: id, status: status}
        })
    }

  	return service;
}]);