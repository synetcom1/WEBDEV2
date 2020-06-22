let app = angular
    .module("myApp", [])
    .controller("myController", function ($scope) {
        let employees = [
            {
                firstName: "Ben",
                lastName: "Johnson",
                gender: "Male",
                salary: 50000
            },
            {
                firstName: "Henry",
                lastName: "Hogan",
                gender: "Male",
                salary: 60000
            },
            {
                firstName: "Kelly",
                lastName: "Clarkson",
                gender: "Feale",
                salary: 70000
            },
            {
                firstName: "Tom",
                lastName: "Cruise",
                gender: "Male",
                salary: 40000
            }
        ]
        $scope.employees = employees;
    });
