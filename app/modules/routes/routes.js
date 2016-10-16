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