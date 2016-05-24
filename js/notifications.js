angular.module("exponeaApp")

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
