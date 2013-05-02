angular.module('adorare')
  .controller 'SongsCtrl', ($scope) ->
    $scope.songs = [
      'Hello'
      'World'
      'Goodbye'
    ]

  .controller 'AddSongCtrl', ($scope) ->
    