angular.module("exponeaApp")

  /**
   * Filter to format a number. Uses spacing instead of
   * commas to separate the thousands.
   */
  .filter("spaceyNumber", function spaceyNumber(numberFilter) {
    return function spaceyNumberFilter(input) {
      return numberFilter(input).replace(",", " ");
    };
  });
