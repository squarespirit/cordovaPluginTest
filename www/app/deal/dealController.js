angular.module('cordovaGeofenceApp')
.controller('DealController', 
    function ($scope, $stateParams) {
        $scope.dealId = $stateParams.id;
    }
);
