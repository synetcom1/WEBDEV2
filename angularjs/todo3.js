angular.module('todoApp', [])
    .controller('todoController', ['$scope', function ($scope) {
        let load = function () {
            let raw_data = localStorage.getItem('todo');
            if (raw_data === null) {
                $scope.tasks = [];
            } else {
                // javascript object
                $scope.tasks = JSON.parse(raw_data);
            }
        };
        let save = function () {
            // to string 
            localStorage.setItem('todo', JSON.stringify($scope.tasks));
        }
        $scope.add = function () {
            $scope.tasks.push($scope.title);
            save();
        }
        $scope.delete = function () {
            $scope.tasks.splice(this.$index, 1);
            save();
        }
        load();
    }]);





