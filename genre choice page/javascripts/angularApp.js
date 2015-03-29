/**
 * Created by Hackathon on 3/28/2015.
 */
var app = angular.module('coreModule', []);

app.controller('CoreController', [
    '$scope',
    function($scope){
        $scope.test = 'Hello world!';
    }]);