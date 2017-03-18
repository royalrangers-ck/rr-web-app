(() => {

    'use strict';

    angular
        .module('app')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['countries', '$log', '$window', 'RegistrationService'];
    function RegistrationController(countries, $log, $window, RegistrationService) {
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
                    $window.location.pathname = '/app/'
                }
            };

            let req = {
                firstName: vm.data.firstName,
                lastName: vm.data.lastName,
                email: vm.data.email,
                password: vm.data.password,
                birthDate: vm.data.birthDate,
                status: vm.data.status,
                country: vm.data.country.name,
                city: vm.data.city.name,
                group: vm.data.group.name,
                platoon: vm.data.platoon.name,
                section: vm.data.section.name
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