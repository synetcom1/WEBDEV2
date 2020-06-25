let app = angular
    .module("myApp", [])
    .controller("myController", function ($scope) {
        let employees = [
            { name: "Juan", gender: "Male", salary: 60000, city: "Berlin" },
            { name: "Zack", gender: "Male", salary: 75000, city: "Munich" },
            { name: "Ion", gender: "Male", salary: 70000, city: "Hamburg" },
            { name: "Fernando", gender: "Male", salary: 80000, city: "Frankfurt" },
            { name: "Tugba", gender: "Female", salary: 90000, city: "Dresden" },
        ];
        $scope.employees = employees;
        $scope.search = function (item) {
            if ($scope.searchText == undefined) {
                return true;
            } else {
                if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        }
    });