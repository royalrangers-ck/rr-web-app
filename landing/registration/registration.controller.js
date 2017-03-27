(() => {

    'use strict';

    angular
        .module('app')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['countries', 'growl', '$log', '$window', '$location', 'RegistrationService'];
    function RegistrationController(countries, growl, $log, $window, $location, RegistrationService) {
        const vm = this;

        vm.data = {};
        vm.availableOptions = [];
        vm.countries = [];
        vm.cities = [];
        vm.groups = [];
        vm.platoons = [];
        vm.sections = [];

        vm.submit = submit;
        vm.getCities = getCities;
        vm.getGroups = getGroups;
        vm.getPlatoons = getPlatoons;
        vm.getSections = getSections;

        activate();

        ///

        function activate() {
            if (countries && countries.$promise) {
                countries.$promise.then((res) => {
                    if (res.success) {
                        vm.countries = res.data;
                    }
                })
            }
        }

        function submit() {
            let afterSave = function (res) {
                if (res.success) {
                    growl.success(res.data.message);
                    //$window.location.pathname = '/app/';
                    $location.path('/login');
                }
            };

            let req = {
                email: vm.data.email,
                password: vm.data.password,
                firstName: vm.data.firstName,
                lastName: vm.data.lastName,
                gender: vm.data.gender,
                telephonNumber: vm.data.telephonNumber,
                birthDate: vm.data.birthDate,
                status: vm.data.status,
                countryId: vm.data.country.id,
                cityId: vm.data.city.id,
                groupId: vm.data.group.id,
                platoonId: vm.data.platoon.id,
                sectionId: vm.data.section.id
            };

            RegistrationService.register(req, afterSave)
        }

        function getCities(id) {
            RegistrationService.city({countryId: id}).$promise.then((res) => {
                if (res.success) {
                    vm.cities = res.data;
                }
            })
        }

        function getGroups(id) {
            RegistrationService.group({cityId: id}).$promise.then((res) => {
                if (res.success) {
                    vm.groups = res.data;
                }
            })
        }

        function getPlatoons(id) {
            RegistrationService.platoon({groupId: id}).$promise.then((res) => {
                if (res.success) {
                    vm.platoons = res.data;
                }
            })
        }

        function getSections(id) {
            RegistrationService.section({platoonId: id}).$promise.then((res) => {
                if (res.success) {
                    vm.sections = res.data;
                }
            })
        }
    }
})();