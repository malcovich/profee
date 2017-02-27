angular.module('Profee').factory('TaskFactory', ['$state', function($state) {
	var service = {};

    service.setHeader = function(){
        this.hearder = $state.current.url.slice(1);
    }

    service.getHeader = function(){
        return this.hearder;
    }
    
  	return service;
}]);