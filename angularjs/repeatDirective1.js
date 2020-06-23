let app = angular
    .module("myApp", [])
    .controller("myController", function ($scope) {
        let countries = [

            {
                name: "UK",
                cities: [
                    { name: "London" },
                    { name: "Manchester" },
                    { name: "Birmingham" }
                ]
            },
            {
                name: "USA",
                cities: [
                    { name: "Los Angeles" },
                    { name: "Chicago" },
                    { name: "Houston" }
                ]
            },
            {
                name: "Australia",
                cities: [
                    { name: "Sydney" },
                    { name: "Brisbane" },
                    { name: "Gold Coast" }
                ]
            }];
        $scope.countries = countries;
    });