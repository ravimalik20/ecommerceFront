angular.module('ecommerceFront').
    config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix("!");

            $routeProvider.
                when("/", {
                    "template" : "<home></home>"
                }).
                otherwise("/");
        }
    ]);
