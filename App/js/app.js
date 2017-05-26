//var app = angular.module('F1FeederApp', ['ui.router', 'F1FeederApp.services', 'F1FeederApp.controllers']);
var app = angular.module('F1FeederApp', ['ui.router', 'ngRoute', 'F1FeederApp.services', 'F1FeederApp.controllers']);
//config(['$routeProvider', function($routeProvider) {
//  $routeProvider.
//	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
//	when("/drivers/:id", { templateUrl: "partials/driver.html", controller: "driverController" }).
//    when("/login", { templateUrl: "partials/login.html", controller: "loginController" }).
//	otherwise({redirectTo: '/login'});
//}]);
app.config(function ($stateProvider, $urlRouterProvider) {
    // Push Interceptors 
    
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html'
        })        
        .state('drivers', {
            url: '/drivers',
            templateUrl: 'partials/drivers.html'
        })
    //$stateProvider.state(home);
    // if none of the above states are matched, use this as the fallback
   // $urlRouterProvider.otherwise("/login");

})
//.run(['$state', function ($state) {
//    $state.transitionTo('login');
//}])
