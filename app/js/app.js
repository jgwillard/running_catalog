var runningCatalogApp = angular.module('runningCatalogApp', [
	'catalogConfig',
	'catalogControllers',
	'catalogFilters',
	'ngRoute'
]);

runningCatalogApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/', {
				templateUrl: 'partials/list.html',
				controller: 'CatCtrl'
			}).
			when('/:category', {
				templateUrl: 'partials/list.html',
				controller: 'CatCtrl'
			}).
			when('/:category/:productID', {
				templateUrl: 'partials/product.html',
				controller: 'ProdCtrl'
			}).
			otherwise({
				redirectTo: '/'
			})
	}])