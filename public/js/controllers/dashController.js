function dashController($scope, $location, $http, userFactory, userService) {
    userService.getUserById(userFactory.datas._id).then(function(e) { //'56f6a4ad4cb92db115699b9c'
        $('body').css('background-image', 'none').css('background-image','url("./assets/bg.jpg")');
        userFactory.datas = e.data[0];
        $scope.username = userFactory.datas.profile.firstname + ' ' + userFactory.datas.profile.lastname;
        $scope.userProfile = userFactory.datas.profile;
        $scope.d = userFactory.datas;
        $scope.userSearch = {profile:userFactory.datas.search};
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
                sexe: 'Sexe',
                origin: 'Origines',
                weight: 'Poids'
            },
            keyMeVal: {
                true: 'Femme',
                false: 'Homme',
                "Je n'en ai pas":'Non',
                'Laisse faire le hasard':"Veut avant tout un PC, mais n'est pas contre un PCP"
            }
        };
        $scope.randomAge = function() {
            return Math.floor(Math.random()*43)+18;
        };
    });
}
