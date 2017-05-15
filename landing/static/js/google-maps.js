(function () {
    'use strict';

    const API_KEY = 'AIzaSyCWEmDm4GoFSV2sglSMsWRTVSU-wI_CPaQ';
    let tag = document.createElement('script');
    let firstScriptTag = document.getElementsByTagName('script')[0];

    tag.src = 'https://maps.googleapis.com/maps/api/js?key='+ API_KEY +'&callback=initMap';
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    function setMapMarkers (map) {

        let cities = [{
            coordinates: [22.6776965, 48.4408968],
            name: 'Мукачево'
        }, {
            coordinates: [22.7457769, 48.5129067],
            name: 'Клиновець'
        }, {
            coordinates: [22.7926493, 48.4037552],
            name: 'Лалово'
        }, {
            coordinates: [28.6036776, 50.2678654],
            name: 'Житомир'
        }, {
            coordinates: [29.024175, 50.3186287],
            name: 'Коростишів'
        }, {
            coordinates: [30.2525067, 50.401699],
            name: 'Київ'
        }, {
            coordinates: [31.9787416, 49.4310824],
            name: 'Черкаси'
        }, {
            coordinates: [28.3995939, 49.2347946],
            name: 'Вінниця'
        }, {
            coordinates: [32.145623, 48.5187443],
            name: 'Кропивницький'
        }, {
            coordinates: [33.3262711, 46.7506371],
            name: 'Нова Коховка'
        }, {
            coordinates: [30.5717029, 46.4598895],
            name: 'Одеса'
        }, {
            coordinates: [28.7751864, 45.3505316],
            name: 'Ізмаїл'
        }, {
            coordinates: [29.1790629, 45.467213],
            name: 'Кілія'
        }, {
            coordinates: [37.441878, 47.1225096],
            name: 'Маріуполь'
        }, {
            coordinates: [37.192532, 48.3531052],
            name: 'Родінське'
        }, {
            coordinates: [37.4926345, 48.6203542],
            name: 'Дружківка'
        }, {
            coordinates: [37.4844015, 48.7294323],
            name: 'Краматорськ'
        }, {
            coordinates: [37.5444009, 48.8539607],
            name: 'Слов\'янськ'
        }, {
            coordinates: [36.1457407, 49.994507],
            name: 'Харків'
        }, {
            coordinates: [34.4871986, 49.6020233],
            name: 'Полтава'
        }];

        let markerIcon = 'static/vendor/images/marker.png';

        for (let i = 0; i < cities.length; i += 1) {
            let city = cities[i];
            let marker = new google.maps.Marker({
                position: {lat: city.coordinates[1], lng: city.coordinates[0]},
                map: map,
                icon: markerIcon,
                title: city.name,
                zIndex: i
            });
        }
    }

    function initMap () {

        let centerUkraine = {lat: 48.3847191, lng: 31.1703258};

        // Create a map object and specify the DOM element for display.
        let map = new google.maps.Map(document.querySelector('.rr-google-map'), {
            center: centerUkraine,
            scrollwheel: false,
            zoom: 6
        });

        setMapMarkers(map);
    }

    window.initMap = initMap;
}());
