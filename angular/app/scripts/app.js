'use strict';

angular.module('adorare', [])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/songs', {
	templateUrl: 'views/songs.html',
	controller: 'SongsCtrl'
      })
      .when('/add_song', {
	templateUrl: 'views/add_song.html',
	controller: 'AddSongCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

