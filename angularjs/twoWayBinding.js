let app = angular
    .module("myApp", [])
    .controller("myController", function ($scope) {
        $scope.message = "Hello Angular.js"
    });

    // sessionStorage and localStorage