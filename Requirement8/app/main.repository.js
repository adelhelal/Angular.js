(function () {
    'use strict';

    angular
        .module('app')
        .factory('mainRepository', main);

    function main(configuration) {
        var url = configuration.isTest ? configuration.testUrl : configuration.liveUrl;
        return {
            getIssues: function (success, fail) { getIssues(url, success, fail) }
        };
    }

    function getIssues(url, success, error) {
        //couldn't use angular's $http.jsonp because it looks for a hardcoded ?callback=JSON_CALLBACK
        $.ajax({
            url: url,
            dataType: 'jsonp',
            jsonpCallback: 'cb',
            success: success,
            error: error
        });
    }

})();