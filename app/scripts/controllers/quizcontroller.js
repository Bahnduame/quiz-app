'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
    .controller('QuestionCtrl',function($scope){
        $scope.questionsAnswered = false;
        $scope.checkAnswer = function(question, answer){
            if(question.answer == answer){
                $scope.$emit('incrementScore');
            }
            $scope.$emit('incrementQuestionsAnswered');
            $scope.questionsAnswered=true;
        };

    })
    .controller('CountdownCtrl',function($scope){
        $scope.timeLeft=60;
        $scope.timer;
        var countdown = function(){
            $scope.timer = setInterval(function(){
                $scope.timeLeft--;
                if($scope.timeLeft == 0){
                    //disable all buttons
                    $scope.$apply();
                    alert("U FOCKING WOT M8?!?!?!");
                    clearInterval($scope.timer);
                }
                 $scope.$apply();
            },1000);
        };

        $scope.start = function(){
            countdown();
        }

        $scope.pause = function(){
            clearInterval($scope.timer);
        }

        $scope.reset = function(){
            clearInterval($scope.timer);
            $scope.timeLeft=60;
            countdown();
        }
        countdown();
    })
  .controller('QuizCtrl', function ($scope) {
    $scope.quiz = [
        {
          "q": "Who is the best ping pong player at FSA?",
          'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
          'answer': "Nimit",
          'difficulty':1
        },
        { "q": "Which robot name was chanted during Lego Mindstorms?",
          'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}],
          'answer':'noHope.js',
          'difficulty':5
        },
        {
          'q': "Out of the following frontend frameworks, which framework is most rails-like",
          'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}],
          'answer':'Ember.js',
          'difficulty':3
        },
        {
          'q': "Which project used a local data store?",
          'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}],
          'answer':'Twitter.js',
          'difficulty':2
        }
    ];
    $scope.score = 0;
    $scope.questionsAnswered = 0;

    $scope.doneWithQuiz = function(){
        return $scope.questionsAnswered == $scope.quiz.length;
    };

    $scope.unsubmittedQuestion='';
    $scope.unsubmittedoption1='';
    $scope.unsubmittedoption2='';
    $scope.unsubmittedoption3='';
    $scope.unsubmittedoption4='';
    $scope.unsubmittedanswer='';

    $scope.addQuestion = function(){
        var tempq = {};
        tempq.q = $scope.unsubmittedQuestion;
        tempq.options=[];
        tempq.options.push({value:$scope.unsubmittedoption2});
        tempq.options.push({value:$scope.unsubmittedoption2});
        tempq.options.push({value:$scope.unsubmittedoption3});
        tempq.options.push({value:$scope.unsubmittedoption4});
        tempq.answer = $scope.unsubmittedanswer;
        $scope.quiz.push(tempq);
    }

    $scope.$on('incrementScore',function(){
        $scope.score ++;
    });

    $scope.$on('incrementQuestionsAnswered',function(){
        $scope.questionsAnswered++;
    });


});
