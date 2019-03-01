angular.module("App", ['main', 'ngMaterial']);

angular.module("main", []);

angular.module("main").controller("mainController", function ($scope, $http) {
  var data;

  var date = new Date();
  date.setDate(date.getDate() - 7);

  $scope.compareDates = function(createdAt) {
    var itemDate = Date.parse(createdAt);
    if (itemDate - Date.parse(date) >= 7) {
      return true;
    } else {
      return false;
    }
  }

  $http.get("https://api.github.com/repos/angular/angular/issues?per_page=100")
    .then(function (response) {
      $scope.data = response.data;
    });
});