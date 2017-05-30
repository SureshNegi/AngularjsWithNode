angular.module('F1FeederApp.controllers', []).

  /* Drivers controller */
  controller('driversController', function ($scope, ergastAPIservice) {
      $scope.nameFilter = null;
      $scope.driversList = [];
      $scope.searchFilter = function (driver) {
          var re = new RegExp($scope.nameFilter, 'i');
          return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
      };

      ergastAPIservice.getDrivers().success(function (response) {
          //Digging into the response to get the relevant data
          $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      });
  }).

  /* Driver controller */
  controller('driverController', function ($scope, $routeParams, ergastAPIservice) {
      $scope.id = $routeParams.id;
      $scope.races = [];
      $scope.driver = null;

      ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
          $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
      });

      ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
          $scope.races = response.MRData.RaceTable.Races;
      });
  }).

  controller('loginController', function ($scope, $routeParams, ergastAPIservice, $location) {

      $scope.id = $routeParams.id;
      $scope.races = [];
      $scope.driver = null;

      $scope.login = function () {
          $location.path('/drivers');
      }
      $scope.SignUp = function () {
          $location.path('/register');
      }
  })
.controller('registerController', function ($scope, $routeParams, ergastAPIservice, $location) {
    this.register = function () {
    
        user_info = { fName: this.user.firstName, lName: this.user.lastName, uName: this.user.username, eMail: this.user.uEmail, passWord: this.user.password };
    

        $.ajax({
            url: 'http://127.0.0.1:8080/addUser',
            data: JSON.stringify({ "info": user_info }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            type: 'POST',
           
            success: function (data) {

                alert('yes');
                console.log('success');
            },
            error: function (xhr, status, error) {

                alert('no');
            }
        });;
    }
});