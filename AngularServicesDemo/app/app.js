var webAdminApp = angular.module('webAdminApp', ['ngRoute']);

webAdminApp.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        controller:'IndexController',
        templateUrl:'app/partials/default.html'
    })
    .when('/about',{
        controller:'IndexController',
        templateUrl:'app/partials/about.html'
    })
    .when('/contact',{
        controller:'IndexController',
        templateUrl:'app/partials/contact.html'
    })
    .when('/login',{
        controller: 'AccountController',
        templateUrl:'app/partials/login.html'
    })
    .when('/register', {
        controller: 'AccountController',
        templateUrl:'app/partials/register.html'
    })
    .when('/userinfo', {
        controller: 'AccountController',
        templateUrl:'app/partials/userinfo.html'
    })
    .otherwise({ridiectTo:'/'});
});