var app = angular.module('app', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.html",
            controller: "mainCtrl"
        })
        .when("/login", {
            templateUrl: "login.html",
            controller: "loginCtrl"
        })
        .when("/register", {
            templateUrl: "register.html",
            controller: "registerCtrl"
        })
});