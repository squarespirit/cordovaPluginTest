angular.module('cordovaGeofenceApp')
.controller('HomeController', 
    function ($scope, $ionicPlatform, $cordovaLocalNotification) {
        $scope.testNotification = function () {
            $ionicPlatform.ready(function () {
                alert("Test notification");
                $cordovaLocalNotification.schedule({
                    text: "Test notification"
                });
            });
        };
    }
);
