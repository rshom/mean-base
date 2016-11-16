// public/js/appRoutes.js

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){

    $routeProvider

	.when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'MainController'
	})

	.when('/2', {
	    templateUrl: 'views/view2.html',
	    controller: '2Controller'
	});

    $locationProvider.html5Mode(true);

}]);
