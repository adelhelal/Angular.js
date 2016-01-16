(function () {
	'use strict';

	angular.module('app', ['ngAnimate'])
        .constant('configuration', {
            isTest: true,
            liveUrl: 'http://status.campaignmonitor.com/api/issues/current',
            testUrl: '/resources/test.jsonp'
        });

})();