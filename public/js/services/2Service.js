// public/js/services/2Services.js

angular.module('2Service', []).factory('2', ['$http', function($http) {

    return {
	get : function () {
	    // call this function on get
	    return $http.get('/api/2'); // makes a call to express
	},

	create : function(someData) {
	    return $http.post('/api/2', someData);
	},

	delete : function(id) {
	    return $http.delete('/api/2/' + id);
	}
    }

}]);
