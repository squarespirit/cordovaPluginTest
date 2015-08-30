angular.module('cordovaGeofenceApp')
.controller('DealController', 
    ["$scope", "$stateParams", function ($scope, $stateParams) {
        $scope.dealId = $stateParams.id;
    }]
);
