var newsApp = angular.module('newsApp', ['ui.router']);

  newsApp.config(function($stateProvider) {

    $stateProvider.state('home', {
      url: "",
      templateUrl: "partials/home.html",
      controller: "ArticlesCtrl"
    });

  });
