let app = angular
    .module("myApp", [])
    .controller("myController", function ($scope) {
        let employees = [
            { name: "Juan", dateOfBirth: new Date("November 22, 1999"), gender: "Male", salary: 60000.599 },
            { name: "Zack", dateOfBirth: new Date("December 08, 1988"), gender: "Male", salary: 75000 },
            { name: "Ion", dateOfBirth: new Date("April 7, 2000"), gender: "Male", salary: 70000 },
            { name: "Fernando", dateOfBirth: new Date("march 13, 1990"), gender: "Male", salary: 80000 },
            { name: "Tugba", dateOfBirth: new Date("November 22, 1999"), gender: "Female", salary: 90000 },
        ];
        $scope.employees = employees;
        $scope.sortColumn = 'name';

        $scope.reverseSort = false;
        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column) {
            if ($scope.sortColumn == column) {
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
            }
        }
    });