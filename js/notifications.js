angular.module("exponeaApp")

  /**
   * User's notifications. It has a bell icon. When the user
   * has any notifications, the bell is red.
   */
  .directive("notifications", function notifications() {
    return {
      restrict: "E",
      templateUrl: "directives/notifications.html",
      scope: {},
      link: function notificationsLink(scope) {
        scope.notifications = [
          "OMG this is fun!"
        ];
        scope.unread = true;
      }
    };
  });
