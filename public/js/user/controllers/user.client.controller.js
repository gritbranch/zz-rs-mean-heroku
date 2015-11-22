angular.module('user').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    $scope.name = Authentication.user ? Authentication.user.fullName + ' - Home' : 'MEAN Application - HomeController';
  }
]);

angular.module('user').controller('UsersController', ['$scope', '$routeParams', '$location', 'Authentication', 'Users',
  function ($scope, $routeParams, $location, Authentication, Users) {
    $scope.name = Authentication.user ? Authentication.user.fullName + ' - Users' : 'MEAN Application - UsersController';
    $scope.authentication = Authentication;

    $scope.find = function () {
      //This method uses a GET HTTP method and expects a JSON array response
      $scope.users = Users.query();
    };
  }
]);

angular.module('user').controller('AboutController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    $scope.name = Authentication.user ? Authentication.user.fullName + ' - About' : 'MEAN Application - AboutController';
  }
]);