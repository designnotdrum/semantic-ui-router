'use strict';

angular.module('angularUiRouter', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('/', {
      	url: '/',
      	templateUrl: 'app/main/main.html',
      	controller: 'MainCtrl'
      })
      .state('login', {
      	url: '/login',
      	templateUrl: 'components/login/login.html'
      });

    $urlRouterProvider.otherwise('/');
  })
;
