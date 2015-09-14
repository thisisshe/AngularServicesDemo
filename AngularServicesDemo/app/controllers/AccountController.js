function AccountController($scope,$rootScope,$location,userFactory,userService) {
    //$scope.users = [];
    
    $scope.loggedUser = "";
   
   
    function init() {
      

        $scope.users = userService.getUsers();

        if (sessionStorage.username != "" && sessionStorage.username != undefined) {
            $scope.loggedUser = sessionStorage.username;
            $rootScope.isAuthenticated = true;
        }
    }

    init();

    $scope.register = function () {
        userService.addUser($scope.newUserModel);
        $location.path('/login');
    }

    $scope.login = function () {
        var isValid = false;
        for (var i = $scope.users.length - 1; i >= 0; i--) {
            if ($scope.users[i].username == $scope.loginModel.username && $scope.users[i].password == $scope.loginModel.password) {
                isValid = true;
                break;
            }
        }

        if (isValid) {
            sessionStorage.username = $scope.loginModel.username;
            $location.path('/userinfo');

        } else {
            alert('Invalid credentials');
        }
    }
}
webAdminApp.controller('AccountController', AccountController);
