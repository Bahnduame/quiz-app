'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:CountdownCtrl
 * @description
 * # CountdownCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('CountdownCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
