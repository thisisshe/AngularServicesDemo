webAdminApp.service('userService', function ($http) {

    var users = [];

    this.addUser = function (user) {
        users.push(user);
    }

    this.getUsers = function () {
        return users;
    }
});