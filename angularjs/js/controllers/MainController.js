app.controller("MainController", ['$scope', function ($scope) {
    $scope.todo = {
        title: "This I Need to Do",
        list: ["Study hard", "Study hard everyday", "Study until you die"]
    }

    $scope.books = {
        title: "Books I Need to Buy",
        list: []
    }

    $scope.addItem = function (itemList, item) {
        itemList.push(item);
    }




}])