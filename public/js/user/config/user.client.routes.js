angular.module('user').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/home', {
      templateUrl: 'js/user/views/home.client.view.html'
    })
    .when('/users-list', {
      templateUrl: 'js/user/views/users-list.client.view.html'
    })
    .when('/about', {
      templateUrl: 'js/user/views/about.client.view.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
  }
]);