// MAIN CONTROLLER
function mainController($scope, $http, userService) {
    $scope.title = "user List";
    $scope.userCreation = [{
        model: 'nickname',
        label: 'Pseudonyme',
        type: 'text',
        placeholder: 'Wesh gro, ton blaz\''
    }, {
        model: 'password',
        label: 'Mot de passe',
        type: 'password',
        placeholder: 'Ton mot de passe... (Souviens t\'en...)'
    }, {
        model: 'passwordConfirm',
        label: 'Confirmes ton mot de passe',
        type: 'password',
        placeholder: 'Confirmes ton mot de passe... (Vraiment...)'
    }, {
        model: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Ton email...'
    }];
    $scope.userCreationProfile = [{
            model: 'firstname',
            label: 'Ton prénom',
            type: 'text',
            placeholder: 'Ton prénom...'
        }, {
            model: 'lastname',
            label: 'Ton nom',
            type: 'text',
            placeholder: 'Ton nom...'
        }, {
            model: 'birthday',
            label: 'Ton anniv\'',
            type: 'date',
            placeholder: 'Ténékan...'
        }, {
            model: 'sexe',
            label: 'Tu es',
            type: 'select',
            values: [
                'Femme',
                'Homme'
            ]
        }, {
            model: 'address.road',
            label: 'Ouktuvis',
            type: 'text',
            placeholder: 'Rue...'
        }, {
            model: 'address.road2',
            label: '',
            type: 'text',
            placeholder: 'Rue 2...'
        }, {
            model: 'address.postalCode',
            label: '',
            type: 'number',
            placeholder: 'Code postal (Le truc à 5 chiffres à peu près)...'
        }, {
            model: 'address.city',
            label: '',
            type: 'text',
            placeholder: 'Paris ou la loupe ?...'
        }, {
            model: 'address.country',
            label: '',
            type: 'text',
            placeholder: 'Ton pays... (Le truc plus grand qu\'une ville)'
        }, {
            model: 'phone.home',
            label: 'Ton 02',
            type: 'number',
            placeholder: 'C\'quoi ton tel maison...'
        }, {
            model: 'phone.mobile',
            label: 'Ton 06',
            type: 'number',
            placeholder: 'Cui sans fil...'
        }

    ];
    $scope.tableau = {};

    $scope.createAccount = function() {
        var data = $scope.tableau;
        userService.createAccount(data);
        $scope.tableau = [];
    };
}
