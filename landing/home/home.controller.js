(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'ModalWindowService'];
    function HomeController($log, ModalWindowService) {
        const vm = this;

        vm.homeModalVideo = ModalWindowService.homeModalVideo;
        vm.slider = initSlider();

        ////

        function initSlider () {

            return {
                myInterval: 2000,
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
