function dashController($scope, $location, $http, userFactory, userService) {
    userService.getUserById('56f2c1f74d31b95c5033c677').then(function(e) {
        $('body').css('background-image', 'none').css('background-color', 'black');
        userFactory.datas = e.data[0];
        $scope.userName = userFactory.datas.profile.firstname + ' ' + userFactory.datas.profile.lastname;
        $scope.userProfile = userFactory.datas.profile;
        $scope.userSearch = userFactory.datas.search;
        $scope.userPic = './assets/yoan_profil.jpg';
        $http.get('/user').then(function(e) {
            $scope.profiles = e.data;
        });
        $scope.translate = {
            keyMe: {
                children: "A des enfants",
                city: 'Habite',
                convenant: "A propos de l'engagement",
                hairColor: 'Couleur des cheveux',
                hairLenght: 'Longueur des cheveux',
                height: 'Taille',
                married: 'Mariage',
                wantChildren: 'Des mioches',
                sexe: 'Sexe'
            },
            keyMeVal: {
                true: 'Femme',
                false: 'Homme',
                "Je n'en ai pas":'Non',
                'Laisse faire le hasard':"Veut avant tout un PC, mais n'est pas contre un PCP"
            }
        };
    });
}
