let app = angular
    .module("myApp", [])
    .controller("myController", function ($scope) {
        let technologies = [
            { name: "Angular.js", likes: 0, dislikes: 0 },
            { name: "PHP", likes: 0, dislikes: 0 },
            { name: "Java", likes: 0, dislikes: 0 },
            { name: "JavaScript", likes: 0, dislikes: 0 }
        ];
        $scope.technologies = technologies;

        $scope.incrementLikes = function (technology) {
            technology.likes++;
        }

        $scope.incrementDislikes = function (technology) {
            technology.dislikes++;
        }
    });