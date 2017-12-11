<script>
    var app = angular.module('myApp', []);
    app.controller('myController',
        function ($scope, $http) {

            var request = {
                method: 'get',
                url: 'residents.json',
                dataType: 'json',
                contentType: "application/json"
            };

            $scope.arrResidents = new Array;

            $http(request)
                .success(function (jsonData) {
                    $scope.arrResidents = jsonData;
                    $scope.list = $scope.arrResidents;
                })
                .error(function () {

                });
        });
</script>
</html>