'use strict';

angular.module('angularUiRouter', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngGrid'])
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
      .state('football', {
        url: '/football',
        templateUrl: 'components/nickComponent/nickComponent.html',
        controller: 'NickComponentCtrl'
      })
      .state('login', {
      	url: '/login',
      	templateUrl: 'components/login/login.html'
      });

    $urlRouterProvider.otherwise('/');
  })
;
