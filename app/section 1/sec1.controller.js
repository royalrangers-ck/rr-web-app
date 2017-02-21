(() => {

    angular
        .module('app')
        .controller('Sec1Controller', Sec1Controller);


    Sec1Controller.$inject = [];

    function Sec1Controller() {
        const vm = this;

        activate();


        function activate() {
            console.log('Init Sec1 controller');
        }
    }

})();