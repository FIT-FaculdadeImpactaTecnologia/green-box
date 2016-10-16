$box.config(['$stateProvider',
	function($stateProvider) {

	$stateProvider

        .state('grid', {
            url: "/grid",
            templateUrl: "views/grid.html"
        });
}]);