let app = angular
    .module("myApp", [])
    .controller("myController", function ($scope) {
        let country = {
            name: "Canada",
            capital: "Otawa",
            flag: "./images/canada.png"
        }
        $scope.country = country;
    });
