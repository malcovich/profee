angular.module('Profee').factory('UserFactory', function() {
	var service = {};
	service.user = localStorage.getItem('User-Data');

	service.setUser = function(user){
		this.user = user;
	};

	service.getUser = function(){
		return this.user;
	};
  	return service;
});