(function () {
    'use strict';

    const API_KEY = 'AIzaSyCWEmDm4GoFSV2sglSMsWRTVSU-wI_CPaQ';
    let tag = document.createElement('script');
    let firstScriptTag = document.getElementsByTagName('script')[0];

    tag.src = 'https://maps.googleapis.com/maps/api/js?key='+ API_KEY +'&callback=initMap';
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    function initMap () {

        let centerUkraine = {lat: 48.3847191, lng: 31.1703258};

        let cities = {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [22.6776965, 48.4408968]},
                properties: {name: 'Мукачево'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [22.7457769, 48.5129067]},
                properties: {name: 'Клиновець'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [22.7926493, 48.4037552]},
                properties: {name: 'Лалово'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [28.6036776, 50.2678654]},
                properties: {name: 'Житомир'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [29.024175, 50.3186287]},
                properties: {name: 'Коростишів'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [30.2525067, 50.401699]},
                properties: {name: 'Київ'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [31.9787416, 49.4310824]},
                properties: {name: 'Черкаси'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [28.3995939, 49.2347946]},
                properties: {name: 'Вінниця'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [32.145623, 48.5187443]},
                properties: {name: 'Кропивницький'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [33.3262711, 46.7506371]},
                properties: {name: 'Нова Коховка'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [30.5717029, 46.4598895]},
                properties: {name: 'Одеса'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [28.7751864, 45.3505316]},
                properties: {name: 'Ізмаїл'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [29.1790629, 45.467213]},
                properties: {name: 'Кілія'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [37.441878, 47.1225096]},
                properties: {name: 'Маріуполь'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [37.192532, 48.3531052]},
                properties: {name: 'Родінське'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [37.4926345, 48.6203542]},
                properties: {name: 'Дружківка'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [37.4844015, 48.7294323]},
                properties: {name: 'Краматорськ'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [37.5444009, 48.8539607]},
                properties: {name: 'Слов\'янськ'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [36.1457407, 49.994507]},
                properties: {name: 'Харків'}
            }, {
                type: 'Feature',
                geometry: {type: 'Point', coordinates: [34.4871986, 49.6020233]},
                properties: {name: 'Полтава'}
            }]
        };

        // Create a map object and specify the DOM element for display.
        let map = new google.maps.Map(document.querySelector('.rr-google-map'), {
            center: centerUkraine,
            scrollwheel: false,
            zoom: 6
        });

        map.data.addGeoJson(cities);
    }

    window.initMap = initMap;
}());
