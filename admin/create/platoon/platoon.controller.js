(() => {

    'use strict';

    angular
        .module('admin')
        .controller('CreatePlatoonController', CreatePlatoonController);

    function CreatePlatoonController($scope, $log, countries, PublicInfoService, ImgUploadService, NotificationService) {
        const vm = this;

        vm.countries = countries.data;
        vm.regions = {};
        vm.cities = {};
        vm.form = {
            platoon: {
                logo: {}
            }
        };

        vm.datePicker = {};
        vm.datePicker.options = {
            minDate: new Date().setHours(0, 0, 0, 0),
            startingDay: 0
        };
        vm.datePicker.opened = false;
        vm.datePicker.open = () => vm.datePicker.opened = true;

        vm.createPlatoon = createPlatoon;
        vm.getRegionsByCountry = getRegionsByCountry;
        vm.getCitiesByRegion = getCitiesByRegion;
        vm.uploadImage = uploadImage;

        activate();

        ////

        function activate() {
            $log.debug('Init CreatePlatoonController ...');
        }

        function createPlatoon() {
            console.log('New platoon data', vm.form.platoon)
        }

        function getRegionsByCountry(country) {
            PublicInfoService.getRegion({countryId: country.id}).$promise.then(function (res) {
                if (res.success) {
                    country.regions = res.data;
                    vm.cities = [];
                    vm.form.platoon.cityId = null;
                }
            })
        }

        function getCitiesByRegion(region) {
            PublicInfoService.getCity({regionId: region.id}).$promise.then(function (res) {
                if (res.success) {
                    region.cities = res.data;
                    vm.form.platoon.cityId = null;
                }
            })
        }

        function uploadImage() {
            ImgUploadService.uploadImage()
                .then(function (res) {
                    vm.form.platoonLogoForShowOnUi = res.croppedImage;
                    vm.form.platoon.logo = res.formDataImage;

                })
                .catch(function (err) {
                    if (err === 'Cancel') {
                        return
                    }
                    let message = err.message || "Some error cause by image uploading";
                    NotificationService.error(message);
                })
        }
    }
})();