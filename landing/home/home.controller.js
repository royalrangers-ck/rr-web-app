(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['ModalWindowService'];
    function HomeController(ModalWindowService) {
        const vm = this;

        vm.homeModalVideo = ModalWindowService.homeModalVideo;
        vm.slider = getSlider();

        ////

        function getSlider () {

            return {
                interval: 2000,
                noWrapSlides: false,
                active: 0,
                slides: [{
                    image: 'static/vendor/images/slider.01.jpg',
                    id: 0
                }, {
                    image: 'static/vendor/images/slider.02.jpg',
                    id: 1
                }, {
                    image: 'static/vendor/images/slider.03.jpg',
                    id: 2
                }, {
                    image: 'static/vendor/images/slider.04.jpg',
                    id: 3
                }, {
                    image: 'static/vendor/images/slider.05.jpg',
                    id: 4
                }, {
                    image: 'static/vendor/images/slider.06.jpg',
                    id: 5
                }]
            };
        }

    }
})();
