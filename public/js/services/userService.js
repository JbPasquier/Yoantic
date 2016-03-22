// USER SERVICE
function userService($http) {
    return {
        databaseOrder : {
            3: {
                name: 'convenant'
            },
            4: {
                name: 'married'
            },
            5: {
                name: 'children'
            },
            6: {
                name: 'wantChildren'
            },
            7: {
                name: 'height'
            },
            8: {
                name: 'weight'
            },
            9: {
                name: 'hairLenght'
            },
            10: {
                name: 'hairColor'
            },
            10: {
                name: 'origin'
            }
        },
        datas: {},
        getUserById : function(id) {
            return $http.get('/user/' + id);
        },
        updateAccount : function(id, objProfile, objSearch){
            return $http.post('/user/' + id, {objProfile:objProfile,objSearch:objSearch});
        },
        createAccount : function(data){
            return $http.post('/user', data).success(function(dat){
                data._id = dat.id;
            });
        },
        delete : function(id) {
            return $http.delete('/user/' + id);
        },
        update : function(current) {
            var objProfile = {}, objSearch = {};
            objProfile[this.databaseOrder[current].name] = this.datas.inputProfileVal;
            objSearch[this.databaseOrder[current].name] = this.datas.inputSearchVal;
            this.updateAccount(this.datas._id,objProfile,objSearch);
        }
    };
}
