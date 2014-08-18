angular.module('blog', [])
    .config(['$interpolateProvider',
        function ($interpolateProvider) {
            return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }]);
