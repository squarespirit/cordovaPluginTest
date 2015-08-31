// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('cordovaGeofenceApp', ['ionic', 'ngCordova'])

.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    //Routing
    $stateProvider

    .state("home", {
        url: "/home",
        templateUrl: "app/home/home.html",
        controller: "HomeController"
    })

    .state("deal", {
        url: "/deal/:id",
        templateUrl: "app/deal/deal.html",
        controller: "DealController"
    }); 

    $urlRouterProvider.otherwise('/home'); 
}])

.run(["$ionicPlatform", "localNotification", function($ionicPlatform, localNotification) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }

        // cordova-plugin-geofence setup
        if (window.geofence) {
            window.geofence.initialize();
            
            // Create testing geofence
            window.geofence.addOrUpdate(
                {
                    id: "0",
                    latitude: 41.738846,
                    longitude: -88.096640,
                    radius: 200, // meters
                    transitionType: 3 // both enter and exit
                    //no notification
                }
            );
            
            window.geofence.onTransitionReceived = function (geofences) {
                geofences.forEach(function (geofence) {
                    localNotification.schedule({
                        text: 'Geofence crossed: id=' + geofence.id + ", tt=" + geofence.transitionType
                    });
                });
            };
        } //end if (window.geofence)
    });
}]);
