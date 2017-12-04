meanStackTemplate.controller("messages", function($http, $scope) {

    $scope.addMessage = function() {

        if (!$scope.message) {

            Materialize.toast("Message is invalid!", 2000);
            return;

        }

        $http({

            method:"POST",
            url:"api/message",
            data: {

                message:$scope.message

            }

        }).then(function successCallBack(response) {

            Materialize.toast("Successfully saved message!", 2000);
            $scope.message = "";
            $scope.loadMessages();

        }, function errorCallBack(response) {

            if (response.data) {

                Materialize.toast(response.data, 5000);

            }

            console.log(error);

        });

    }

    $scope.deleteMessage = function(messageId) {

        if (!messageId) {

            Materialize.toast("Ooops! No message id given!", 5000);
            return;

        }

        $http({

            method:"DELETE",
            url:"api/message",
            params: {
                
                messageId:messageId

            }

        }).then(function successCallBack(response) {

            Materialize.toast("Successfully deleted message!", 2000);
            $scope.loadMessages();

        }, function errorCallBack(response) {

            if (response.data) {

                Materialize.toast(response.data, 5000);

            }

            console.log(response);

        });

    }

    $scope.loadMessages = function() {
        
        $http({
            
            method:"GET",
            url:"api/message"
    
        }).then(function successCallBack(response) {
    
            console.log(response.data);
            $scope.messages = response.data;
    
        }, function errorCallBack(response) {
    
            Materialize.toast("Error! " + response.data.message, 3000);
            console.log(response);
    
        });

    }

    $scope.loadMessages();

});