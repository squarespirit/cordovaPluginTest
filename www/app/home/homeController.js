angular.module('cordovaGeofenceApp')
.controller('HomeController', 
    function ($scope, $ionicPlatform, $window) {
        $scope.testNotification = function () {
            $ionicPlatform.ready(function () {
                alert("Test notification");
                cordova.plugins.notification.local.schedule({
                    id: 1,
                    title: "cordovaGeofenceApp",
                    text: "Test notification"
                });
            });
        };
        $scope.getWatchedGeofences = function () {
            alert("getWatchedGeofences() was called");
            if ($window.geofence && $window.geofence.getWatched) {
                alert("($window.geofence && $window.geofence.getWatched) was true");
                try {
                    alert($window.geofence.getWatched);
                    $window.geofence.getWatched().then(
                        function (geofencesJson) { //success cb 
                            alert(geofencesJson);
                        },
                        function (reason) { //failure cb
                            alert("Failed to get watched geofences, " + reason);
                        }
                    );
                } catch (e) {
                    /*
                     * Will catch error that "object is not a function,
                     * purportedly from calling $window.geofence.getWatched()
                     * (not just alerting $window.geofence.getWatched)
                     */
                    alert(e);
                }
            } else {
                alert("($window.geofence && $window.geofence.getWatched) was false");
            } 
        }
    }
);
