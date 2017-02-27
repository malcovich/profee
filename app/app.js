(function(){
	angular.module('Profee', ['ui.router', 'ngFileUpload'])
		.config(function($stateProvider){
			$stateProvider
				.state('signUp', {
					url: "/signup",
					templateUrl: "app/signup/signup.html",
					controller: "SignUpController"
				})
				.state('landing', {
					url: "/",
					templateUrl: "app/landing/index.html",
					controller: "LandingController"
				})
				.state('addContact', {
					url: "/contacts/add",
					templateUrl: "app/contacts/add.html",
					controller: "AddContactController"
				})
				.state('global', {
					url: "/global",
					templateUrl: "app/global/index.html",
					controller: "globalController"
				})
				.state('addGlobal', {
					url: "/global/add",
					templateUrl: "app/global/add.html",
					controller: "addGlobalController"
				})
				.state('itemGlobal', {
					url: "/global/:globalId",
					templateUrl: "app/global/item.html",
					controller: "singleGlobalController"
				})
				.state('admin', {
					url: "/admin",
					templateUrl: "app/admin/index.html",
					controller: "adminController"
				})
				.state('adminListPredefined', {
					url: "/admin/predefined",
					templateUrl: "app/admin/predefined/list.html",
					controller: "listPredefinedController"
				})
				.state('adminAddPredefined', {
					url: "/admin/predefined/add",
					templateUrl: "app/admin/predefined/add.html",
					controller: "addPredefinedController"
				})
				.state('listPredefined', {
					url: "/predefined",
					templateUrl: "app/predefined/list.html",
					controller: "predefinedController"
				})
				.state('tasks', {
					url: "/tasks",
					templateUrl: "app/tasks/bar.html",
					controller: "barController"
				})
				.state('tasks.years', {
					url: "/years",
					templateUrl: "app/tasks/list.html",
					controller: "listController"
				})
				.state('tasks.mounths', {
					url: "/mounths",
					templateUrl: "app/tasks/list.html",
					controller: "listController"
				})
				.state('tasks.days', {
					url: "/days",
					templateUrl: "app/tasks/list.html",
					controller: "listController"
				})
				


		}).run(function(TaskFactory, $rootScope){
			$rootScope.$on('$stateChangeSuccess',function(err){
				TaskFactory.setHeader();
				console.log('stateChangeSuccess', err, TaskFactory.getHeader())
			})
		})
}());