angular.module('user').config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'js/user/views/home.client.view.html'
      })
      .when('/users', {
        templateUrl: 'js/user/views/list-users.client.view.html'
      })
      .when('/users/:userId', {
        templateUrl: 'js/user/views/view-user.client.view.html'
      })
      .when('/users/:userId/edit', {
        templateUrl: 'js/user/views/edit-user.client.view.html'
      })
      .when('/about', {
        templateUrl: 'js/user/views/about.client.view.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }
]);