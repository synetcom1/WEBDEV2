// let app = angular.module("myApp", []);

// app.controller("myController", function ($scope) {
//     let employee = {
//         firstName: "John",
//         lastName: "Wayne",
//         gender: "Male"
//     }
//     $scope.employee = employee;
// });

// Method Chaining
let app = angular
    .module("myApp", [])
    .controller("myController", function ($scope) {
        let employee = {
            firstName: "John",
            lastName: "Wayne",
            gender: "Male"


        }
        $scope.employee = employee;
    });