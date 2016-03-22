// USER SERVICE
function userService($http, userFactory) {
    return {
        getUserById : function(id) {
            return $http.get('/user/' + id);
        },
        updateAccount : function(id, objProfile, objSearch){
            return $http.post('/user/' + id, {objProfile:objProfile,objSearch:objSearch});
        },
        createAccount : function(data){
            return $http.post('/user', data).then(function(e){
                userFactory.datas.id = e.data.id;
            });
        },
        delete : function(id) {
            return $http.delete('/user/' + id);
        },
        update : function() {
            var objProfile = {}, objSearch = {};
            objProfile[userFactory.databaseOrder[userFactory.prevCurrent].name] = userFactory.datas.inputProfileVal;
            objSearch[userFactory.databaseOrder[userFactory.prevCurrent].name] = userFactory.datas.inputSearchVal;
            this.updateAccount(userFactory.datas._id,objProfile,objSearch);
        }
    };
}
