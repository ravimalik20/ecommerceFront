angular.module('productTile').
    component('productTile', {
        templateUrl: 'views/home/components/product-tile.template.html',
        controller: ['$http', 
            function ProductTile($http) {
                var self = this;

                $http({
                    method: 'GET',
                    url: api('/product'),
                    headers: {
                        'Authorization': 'Bearer gntfhheJulTWKYwS5ISUBTQNVNo7Rn8IXhwOYjjCndCAACqZcc02dx0JTJae'
                    }
                }).then(function (response) {
                    console.log(response);

                    self.products = response.data.data;
                });
            }
        ]
    });
