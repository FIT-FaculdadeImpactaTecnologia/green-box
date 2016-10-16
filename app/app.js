var $box = angular.module('box', [ 'ui.router', 'ngMaterial' ])

.controller('AppCtrl', function($scope) {
  $scope.imagePath = 'https://material.angularjs.org/latest/img/washedout.png';
});