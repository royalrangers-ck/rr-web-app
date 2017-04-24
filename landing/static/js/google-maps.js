(function () {
    'use strict';

    const API_KEY = 'AIzaSyCWEmDm4GoFSV2sglSMsWRTVSU-wI_CPaQ';
    var tag = document.createElement('script');
    var firstScriptTag = document.getElementsByTagName('script')[0];

    tag.src = 'https://maps.googleapis.com/maps/api/js?key='+ API_KEY +'&callback=initMap';
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    function initMap () {

        var cherkasyLatLng = {lat: 49.4492945, lng: 32.0365721};

        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.querySelector('.rr-google-map'), {
            center: cherkasyLatLng,
            scrollwheel: false,
            zoom: 10
        });

        var contentString = '<h5>this is Cherkasyyy !!!</h5>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
            map: map,
            position: cherkasyLatLng
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        infowindow.open(map, marker);
    }

    window.initMap = initMap;
}());