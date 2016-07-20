angular.module('productTile').
    factory('Product', [ '$resource',
        function ($resource) {
            return $resource(api('/product'), {}, {
                query : {
                    method: 'GET',
                    params: {
                        'access_token': API_ACCESS_KEY,
                        'origin': CURRENT_URL
                    },
                    isArray: true
                }
            });
        }
    ]);
