meanStackTemplate.controller("helloWorld", function($http, $scope) {

    $http({

        method: "GET",
        url: "api/hello"

    }).then(function successCallBack(response) {

        $scope.message = response.data;

    }, function errorCallBack(response) {

        Materialize.toast("Error! " + response.data.message, 3000);
        console.log(response);

    });

});