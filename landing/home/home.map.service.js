(function () {

    'use strict';

    angular
        .module('app')
        .service('HomeMapService', HomeMapService);

    function HomeMapService() {
        this.map = {
            center: {latitude: 48.3847191, longitude: 31.1703258},
            zoom: 6,
            options: {
                scrollwheel: false,
            }
        };

        this.getLocations = function () {
            let marks = locations;
            marks.forEach(function (item, index) {
                item.id = index;
                // item.icon = 'static/vendor/images/marker.png'
            });
            return marks
        };

        let locations = [
            {
                name: 'Мукачево',
                coordinates: {
                    latitude: 48.4408968,
                    longitude: 22.6776965
                }
            }, {
                name: 'Клиновець',
                coordinates: {
                    latitude: 48.5129067,
                    longitude: 22.7457769
                }
            }, {
                name: 'Лалово',
                coordinates: {
                    latitude: 48.4037552,
                    longitude: 22.7926493
                }
            }, {
                name: 'Житомир',
                coordinates: {
                    latitude: 50.2678654,
                    longitude: 28.6036776
                }
            }, {
                name: 'Коростишів',
                coordinates: {
                    latitude: 0.3186287,
                    longitude: 29.024175,
                }
            }, {
                name: 'Київ',
                coordinates: {
                    latitude: 50.401699,
                    longitude: 30.2525067
                }
            }, {
                name: 'Черкаси',
                coordinates: {
                    latitude: 49.4310824,
                    longitude: 31.9787416
                }
            }, {
                name: 'Вінниця',
                coordinates: {
                    latitude: 49.2347946,
                    longitude: 28.3995939
                }
            }, {
                name: 'Кропивницький',
                coordinates: {
                    latitude: 8.5187443,
                    longitude: 32.145623,
                }
            }, {
                name: 'Нова Коховка',
                coordinates: {
                    latitude: 46.7506371,
                    longitude: 33.3262711
                }
            }, {
                name: 'Одеса',
                coordinates: {
                    latitude: 46.4598895,
                    longitude: 30.5717029
                }
            }, {
                name: 'Ізмаїл',
                coordinates: {
                    latitude: 45.3505316,
                    longitude: 28.7751864
                }
            }, {
                name: 'Кілія',
                coordinates: {
                    latitude: 45.4672130,
                    longitude: 29.1790629
                }
            }, {
                name: 'Маріуполь',
                coordinates: {
                    latitude: 7.12250960,
                    longitude: 37.441878,
                }
            }, {
                name: 'Родінське',
                coordinates: {
                    latitude: 8.35310520,
                    longitude: 37.192532,
                }
            }, {
                name: 'Дружківка',
                coordinates: {
                    latitude: 48.6203542,
                    longitude: 37.4926345
                }
            }, {
                name: 'Краматорськ',
                coordinates: {
                    latitude: 48.7294323,
                    longitude: 37.4844015
                }
            }, {
                name: 'Слов\'янськ',
                coordinates: {
                    latitude: 48.8539607,
                    longitude: 37.5444009
                }
            }, {
                name: 'Харків',
                coordinates: {
                    latitude: 49.9945070,
                    longitude: 36.1457407
                }
            }, {
                name: 'Полтава',
                coordinates: {
                    latitude: 49.6020233,
                    longitude: 34.4871986
                }
            }
        ];

    }
})();
