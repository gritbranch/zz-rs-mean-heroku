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

    $scope.findOne = function () {
      //This method uses a GET HTTP method and expects a JSON object response
      $scope.user = Users.get({
        userId: $routeParams.userId
      });
    };

    $scope.update = function () {
      $scope.user.$update(function () {
        $location.path('users/' + $scope.user._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.delete = function (user) {
      //This method uses a DELETE HTTP method and expects a JSON object response
      if (user) {
        //Delete from list view
        user.$remove(function () {
          for (var i in $scope.users) {
            if ($scope.users[i] === user) {
              $scope.users.splice(i, 1);
            }
          }
        });
      } else {
        //Delete from view
        $scope.user.$remove(function () {
          $location.path('users');
        });
      }
    };

  }
]);

angular.module('user').controller('AboutController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    $scope.name = Authentication.user ? Authentication.user.fullName + ' - About' : 'MEAN Application - AboutController';
  }
]);