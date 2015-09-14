webAdminApp.factory('userFactory', function () {
    var users = [];
    var repository = {};

    repository.addUser = function (user) {
        alert("In factory");

        users.push(user);
    }

    repository.getUsers = function () {
        return users;
    }

    return repository;
});