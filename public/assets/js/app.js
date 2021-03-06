var $box = angular.module('box', [ 'ui.router', 'ngMaterial' ])
function config($stateProvider, $urlRouterProvider, $httpProvider, $provide, $locationProvider) {
    $locationProvider.html5Mode(true);
}

$box
    .config([
        '$stateProvider', '$urlRouterProvider', '$httpProvider', '$provide', '$locationProvider', config
    ])
    .run(['$rootScope', '$state',
        function($rootScope, $state) {
        
            $rootScope.$state = $state;

        }
    ]);
$box.config(['$urlRouterProvider', function($urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
}]);



$box.config(['$stateProvider',
	function($stateProvider) {

	$stateProvider
    .state('grid', {
        url: "/grid",
        templateUrl: "views/grid.html"
    });

    $stateProvider
    .state('description', {
        url: "/description",
        templateUrl: "views/description.html"
    });

    $stateProvider
    .state('status', {
        url: "/status",
        templateUrl: "views/status.html"
    });

}]);
//# sourceMappingURL=app.js.map
