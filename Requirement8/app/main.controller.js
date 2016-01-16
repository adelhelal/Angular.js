(function () {
    'use strict';

    angular
        .module('app')
        .controller('mainController', main);

    function main($scope, $interval, mainRepository) {
        $scope.load = function () {
            $scope.loading = true;
            load($scope, mainRepository.getIssues);
            $interval(function () { load($scope, mainRepository.getIssues); }, 2000);
        };
        $scope.moment = function (date) {
            return moment(date).fromNow();
        };
    }

    function load(scope, getIssues) {
        getIssues(
            function (response) {
                scope.loading = false;
                scope.loaded = true;
                scope.issues = response;
                scope.empty = isEmpty(scope);
                scope.error = null;
                scope.$apply();
            },
            function (response, status, message) {
                scope.loading = false;
                scope.loaded = true;
                scope.issues = null;
                scope.empty = null;
                scope.error = errorMessage({ status: response.status, message: message });
                scope.$apply();
            }
        );
    }

    function isEmpty(scope) {
        return Array.isArray(scope.issues) && scope.issues.length === 0;
    }

    function errorMessage(error) {
        return 'An error has occurred. (' + error.status + ' : ' + error.message + ')';
    }

})();