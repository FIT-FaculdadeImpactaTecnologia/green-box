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