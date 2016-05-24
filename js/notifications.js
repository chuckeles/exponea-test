angular.module("exponeaApp")

  .directive("notifications", function notifications() {
    return {
      restrict: "E",
      templateUrl: "directives/notifications.html"
    };
  });
