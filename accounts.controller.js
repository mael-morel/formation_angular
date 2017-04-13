
(function (){
    angular.module("myApp").controller('ListAccountsController', ListAccountsController);

    function ListAccountsController(){
        var vm = this;
        vm.accounts = [
            {'number' : 1234567891, 'owner': 'Didier Jeanchard'},
            {'number' : 1098765432, 'owner': 'Didier Jeanchard'},
            {'number' : 1112131415, 'owner': 'Mélanie Jeanchard'}
        ];
    }
})();
