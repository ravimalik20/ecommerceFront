angular.module('featuredProducts').
    component('featuredProducts', {
        templateUrl: 'views/home/components/featured-products.template.html',
        controller: ['$http',
            function FeaturedProductsController($http) {
                var self = this;

                $http({
                    method: 'GET',
                    url: api('/product'),
                    headers: {
                        'Authorization': 'Bearer gntfhheJulTWKYwS5ISUBTQNVNo7Rn8IXhwOYjjCndCAACqZcc02dx0JTJae'
                    }
                }).then(function (response) {
                    self.products = response.data.data;
                });
            }
        ]
    });
