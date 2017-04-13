
(function (){
    angular.module('accounts')
        .controller('ListAccountsController', ListAccountsController)
        .controller('CreateAccountController', CreateAccountController);


    function ListAccountsController(){

        console.log('Init ListAccountsController');

        var vm = this;
        vm.accounts = [
            {'number' : 1234567891, 'owner': 'Didier Jeanchard'},
            {'number' : 1098765432, 'owner': 'Didier Jeanchard'},
            {'number' : 1112131415, 'owner': 'Mélanie Jeanchard'}
        ];
    }

    function CreateAccountController(){
        var vm = this;

        vm.createAccount = function() {
            if (vm.accountForm.$invalid) {
                console.error(vm.account);
                return;
            }
            console.log(vm.account);
        };
    }
})();
