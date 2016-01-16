// Jasmine Unit Test - Controllers

describe('When calling mainController', function () {
    var $controller;

    beforeEach(module('app'));
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('With $scope.load() invoked and returned a successful response', function () {
        var scope, controller, mainRepository;
        var issues = [{ id: '1', title: 'Anyone can play our game!' }, { id: '2', title: 'No one can play our game!' }];

        beforeEach(function () {
            scope = {
                $apply: function () { }
            };
            mainRepository = {
                getIssues: function (success, fail) { success(issues); }
            };
            controller = $controller('mainController', { $scope: scope, $interval: setTimeout, mainRepository: mainRepository });
        });

        it('Final state should be loaded', function () {
            scope.load();
            expect(scope.loaded).toEqual(true);
        });

        it('Issues should not be empty', function () {
            scope.load();
            expect(scope.empty).toEqual(false);
        });

        it('Issues should contain data', function () {
            scope.load();
            expect(scope.issues).toBe(issues);
        });

        it('No errors should be reported', function () {
            scope.load();
            expect(scope.error).toBe(null);
        });
    });

    describe('With $scope.load() invoked and returned an empty response', function () {
        var scope, controller, mainRepository;
        var issues = [];

        beforeEach(function () {
            scope = {
                $apply: function () { }
            };
            mainRepository = {
                getIssues: function (success, fail) { success(issues); }
            };
            controller = $controller('mainController', { $scope: scope, $interval: setTimeout, mainRepository: mainRepository });
        });

        it('Final state should be loaded', function () {
            scope.load();
            expect(scope.loaded).toEqual(true);
        });

        it('Issues should be empty', function () {
            scope.load();
            expect(scope.empty).toEqual(true);
        });
    });

    describe('With $scope.load() invoked and returned a fail response', function () {
        var scope, controller, mainRepository;
        var response = { status: '404', message: 'Not found' };

        beforeEach(function () {
            scope = {
                $apply: function () { }
            };
            mainRepository = {
                getIssues: function (success, fail) { fail(response, response.status, response.message); }
            };
            controller = $controller('mainController', { $scope: scope, $interval: setTimeout, mainRepository: mainRepository });
        });

        it('Final state should be loaded', function () {
            scope.load();
            expect(scope.loaded).toEqual(true);
        });

        it('Issues should not be empty', function () {
            scope.load();
            expect(scope.empty).toBe(null);
        });

        it('Issues should contain no data', function () {
            scope.load();
            expect(scope.issues).toBe(null);
        });

        it('Error should be reported', function () {
            scope.load();
            expect(scope.error).toBe('An error has occurred. (404 : Not found)');
        });
    });
});
