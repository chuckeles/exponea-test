angular.module("exponeaApp")

  /**
   * Top menu directive with breadcrumbs and important links.
   */
  .directive("topMenu", function topMenu() {
    return {
      restrict: "E",
      templateUrl: "directives/top-menu.html"
    };
  });
