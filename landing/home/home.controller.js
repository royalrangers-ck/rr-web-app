(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

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
                    id: 0,
                    description: 'це наставництво майбутніх лідерів'
                }, {
                    image: 'static/vendor/images/slider.02.jpg',
                    id: 1,
                    description: 'це захоплюючий світ таборів та походів'
                }, {
                    image: 'static/vendor/images/slider.03.jpg',
                    id: 2,
                    description: 'це система зростання та досягнень з 5 до 17 років'
                }, {
                    image: 'static/vendor/images/slider.04.jpg',
                    id: 3,
                    description: 'це академія підготовки та навчання'
                }, {
                    image: 'static/vendor/images/slider.05.jpg',
                    id: 4,
                    description: 'це велика дружня родина'
                }, {
                    image: 'static/vendor/images/slider.06.jpg',
                    id: 5,
                    description: 'це твоя пригода на все життя'
                }]
            };
        }

    }
})();
