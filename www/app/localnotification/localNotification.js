angular.module('cordovaGeofenceApp')
.factory("localNotification", ["$ionicPlatform", function ($ionicPlatform) {

    var notificationCount = 0;

    /*
     * Schedule a local notification.
     * 
     * notification: An object which can supply title, text, and 
     * data (arbitrary data that will be stringified) properties.
     * Do not supply an id property; each notification will be given
     * a unique id by this function. Required.
     *
     * onclick: A callback to be executed when the notification is
     * clicked. Takes the notification object as a parameter.
     * Optional.
     */
    var schedule = function (notification, onclick) {
        //Set notification id to notificationCount, and increment count
        notification.id = notificationCount;
        notificationCount++;

        //Schedule notification
        cordova.plugins.notification.local.schedule(notification);

        //If onclick, register the onclick event
        if (onclick) {
            $ionicPlatform.ready(function () {
                cordova.plugins.notification.local.on("click", 
                    function (someNotification) {
                        /*
                         * someNotification could be any notification, 
                         * not necessarily the one just scheduled
                         */
                        if (someNotification.id === notification.id) {
                            //Matching id --> same notification
                            onclick(someNotification);
                        }
                    }
                );
            }); 
        }
    };

    return {
        schedule: schedule
    };
}]); 
